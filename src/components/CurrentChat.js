import React, { useContext, useState } from "react";
import { firestore } from "../firebase";
import { MessagesContext } from "../providers/MessagesProvider";
import { UserContext } from "../providers/UserProvider";
import ChatMessage from "./ChatMessage";
import "./CurrentChat.css";
function CurrentChat({ displayName, uid }) {
  const [messages, setMessages] = useContext(MessagesContext);
  const user = useContext(UserContext);
  const [content, setContent] = useState("");

  const sendMessage = () => {
    const msg = {
      content,
      idReceiver: uid,
      idSender: user.uid,
      date: Date.now(),
    };
    firestore.collection("messages").add(msg);
    if (msg.idSender === user.uid) setMessages((prev) => [...prev, msg]);
    setContent("");
  };

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
          {messages &&
            messages
              .sort((a, b) => a.date - b.date)
              .map((v, i) => <ChatMessage key={i} {...v} />)}
        </ul>
        <div className="bottom_wrapper clearfix">
          <div className="message_input_wrapper">
            <input
              className="message_input"
              placeholder="Type your message here..."
              name="message"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="send_message">
            <div className="icon"></div>
            <div onClick={sendMessage} className="text">
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Choose a user to chat with"
  );
}

export default CurrentChat;
