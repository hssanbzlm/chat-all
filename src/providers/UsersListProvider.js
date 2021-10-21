import React, { createContext, useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { firestore } from "../firebase";
import { UserContext } from "./UserProvider";

export const UsersListContext = createContext();
function UsersListProvider({ children }) {
  let unsubscribeFromFireStore = useRef(null);
  const [users, setUsers] = useState();
  const currentUser = useContext(UserContext);

  //logic to get list of users
  useEffect(() => {
    async function getUsers() {
      unsubscribeFromFireStore.current = await firestore
        .collection("users")
        .where("uid", "!=", currentUser.uid)
        .onSnapshot((snapshot) => {
          const users = snapshot.docs.map((users) => users.data());
          setUsers(users);
        });
    }
    if (currentUser.uid) {
      getUsers();
    }

    return () => unsubscribeFromFireStore.current;
  }, [currentUser.uid]);

  return (
    <UsersListContext.Provider value={users}>
      {children}
    </UsersListContext.Provider>
  );
}

export default UsersListProvider;
