import React, { createContext, useEffect, useRef, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase";
export const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState({});
  let unsubscribeFromAuth = useRef(null);
  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const { displayName, photoURL, email, uid } = userAuth;
        setUser({ displayName, photoURL, email, uid });
        await createUserProfileDocument(userAuth);
      } else setUser(null);
    });
    return () => unsubscribeFromAuth.current();
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
