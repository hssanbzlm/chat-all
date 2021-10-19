import React from "react";
import CurrentChat from "../components/CurrentChat";
import UsersList from "../components/UsersList";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat-container">
      <CurrentChat />
      <UsersList />
    </div>
  );
}

export default Chat;
