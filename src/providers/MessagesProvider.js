import React, { createContext, useEffect, useRef, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { firestore } from "../firebase";
import { UserContext } from "./UserProvider";

export const MessagesContext = createContext();

function MessagesProvider({ children, chatWithuserId }) {
  const user = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  let unsubscribeFromFirstMessages = useRef(null);
  useEffect(() => {
    setMessages([]);
    async function getMessages() {
      unsubscribeFromFirstMessages.current = await firestore
        .collection("messages")
        .where("idReceiver", "==", user.uid)
        .where("idSender", "==", chatWithuserId)
        .onSnapshot((snapshot) => {
          const receivedMessages = snapshot.docs.map((v) => v.data());
          setMessages((prev) => [
            ...prev.filter((v) => v.idSender === user.uid), //leave only messages sent by current user to avoid duplication
            ...receivedMessages,
          ]);
        });
    }
    if (user.uid && chatWithuserId) {
      getMessages();
    }
    return () => unsubscribeFromFirstMessages.current;
  }, [user.uid, chatWithuserId]);

  useEffect(() => {
    if (user.uid && chatWithuserId) {
      firestore
        .collection("messages")
        .where("idReceiver", "==", chatWithuserId)
        .where("idSender", "==", user.uid)
        .get()
        .then((v) =>
          v.forEach((x) => setMessages((prev) => [...prev, x.data()]))
        );
    }
  }, [chatWithuserId, user.uid]);

  return (
    <MessagesContext.Provider value={[messages, setMessages]}>
      {children}
    </MessagesContext.Provider>
  );
}

export default MessagesProvider;
