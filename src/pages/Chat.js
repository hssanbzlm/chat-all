import React, { useState } from "react";
import CurrentChat from "../components/CurrentChat";
import UsersList from "../components/UsersList";
import MessagesProvider from "../providers/MessagesProvider";
import UsersListProvider from "../providers/UsersListProvider";
import "./Chat.css";

function Chat() {
  const [chatWith, setChatWith] = useState();
  const handleUserClick = (user) => {
    setChatWith(user);
  };
  return (
    <div className="chat-container">
      <MessagesProvider chatWithuserId={chatWith && chatWith.uid}>
        <CurrentChat {...chatWith} />
      </MessagesProvider>
      <UsersListProvider>
        <UsersList handleUserClick={handleUserClick} />
      </UsersListProvider>
    </div>
  );
}

export default Chat;
