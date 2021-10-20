import React, { useContext } from "react";
import { MessagesContext } from "../providers/MessagesProvider";
import ChatMessage from "./ChatMessage";
import "./CurrentChat.css";

function CurrentChat({ displayName, uid }) {
  const messages = useContext(MessagesContext);
  return displayName ? (
    <div className="current-chat-container">
      <div className="chat_window">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close"></div>
            <div className="button minimize"></div>
            <div className="button maximize"></div>
          </div>
          <div className="title">Chat with {displayName}</div>
        </div>
        <ul className="messages">
          {messages && messages.map((v, i) => <ChatMessage key={i} {...v} />)}
        </ul>
        <div className="bottom_wrapper clearfix">
          <div className="message_input_wrapper">
            <input
              className="message_input"
              placeholder="Type your message here..."
            />
          </div>
          <div className="send_message">
            <div className="icon"></div>
            <div className="text">Send</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Choose a user to chat with"
  );
}

export default CurrentChat;
