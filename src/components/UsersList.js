import React from "react";
import { useContext } from "react/cjs/react.development";
import { UsersListContext } from "../providers/UsersListProvider";
import User from "./User";
import "./UsersList.css";
function UsersList({ handleUserClick }) {
  const users = useContext(UsersListContext);

  return (
    <div className="users-list">
      {users &&
        users.map((v) => (
          <User key={v.uid} {...v} handleUserClick={handleUserClick} />
        ))}
    </div>
  );
}

export default UsersList;
