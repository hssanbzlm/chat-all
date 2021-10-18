import React, { useContext } from "react";
import SignIn from "../components/SignIn";
import { UserContext } from "../providers/UserProvider";
import CurrentUser from "../components/CurrentUser";
function Auth() {
  const user = useContext(UserContext);
  return <div>{user ? <CurrentUser {...user} /> : <SignIn />}</div>;
}

export default Auth;
