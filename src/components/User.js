import React from "react";
import "./User.css";

function User({ displayName, photoURL }) {
  return (
    <div className="user-container">
      <div>{displayName}</div>
      <img
        style={{ borderRadius: "50%" }}
        src={photoURL}
        alt="user-img"
        width="100"
        height="50"
      />
    </div>
  );
}

export default User;
