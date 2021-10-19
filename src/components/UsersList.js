import React from "react";
import User from "./User";
import "./UsersList.css";
function UsersList() {
  const arr = [
    {
      displayName: "hssan",
      photoURL: "https://via.placeholder.com/150",
      uid: "aeezk",
    },
    {
      displayName: "KARIM",
      photoURL: "https://via.placeholder.com/150",
      uid: "ksjdf",
    },
  ];

  return (
    <div className="users-list">
      {arr.length > 0 && arr.map((v) => <User key={v.uid} {...v} />)}
    </div>
  );
}

export default UsersList;
