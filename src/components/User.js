import React from "react";
import "./User.css";

function User({ displayName, photoURL, uid, handleUserClick }) {
  const onClickUser = () => {
    handleUserClick({ displayName, photoURL, uid });
  };
  return (
    <div
      className="user-container"
      style={{ cursor: "pointer" }}
      onClick={onClickUser}
    >
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
