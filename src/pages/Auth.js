import React, { useContext } from "react";
import SignIn from "../components/SignIn";
import { UserContext } from "../providers/UserProvider";
import CurrentUser from "../components/CurrentUser";
import Chat from "./Chat";
import "./Auth.css";
function Auth() {
  const user = useContext(UserContext);
  return (
    <div className="auth-container">
      {user ? (
        <>
          <CurrentUser {...user} /> <Chat />{" "}
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Auth;
