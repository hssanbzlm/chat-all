import React, { createContext, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "./UserProvider";

export const MessagesContext = createContext();

function MessagesProvider({ children, chatWithuserId }) {
  const user = useContext(UserContext);
  const [messages, setMessages] = useState();
  //logic to get messages where the sender is user.uid and receiver is userId
  // or sender is userId and receiver is user.uid

  return (
    <MessagesContext.Provider
      value={
        messages &&
        messages.filter(
          (v) =>
            (v.idSender === user.uid && v.idReceiver === chatWithuserId) ||
            (v.idSender === chatWithuserId && v.idReceiver === user.uid)
        )
      }
    >
      {children}
    </MessagesContext.Provider>
  );
}

export default MessagesProvider;
