import React from "react";
import { signOut } from "../firebase";
function CurrentUser({ email, photoURL, displayName }) {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
}

export default CurrentUser;
