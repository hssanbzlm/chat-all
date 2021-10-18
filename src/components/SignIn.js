import React from "react";
import { signInWithGoogle } from "../firebase";
function SignIn() {
  return <button onClick={signInWithGoogle}>Sign In With Google</button>;
}

export default SignIn;
