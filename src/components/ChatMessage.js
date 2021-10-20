import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

function ChatMessage({ idSender, content }) {
  const currentUser = useContext(UserContext);
  return (
    <div className="message_template">
      <li
        className={`message ${idSender === currentUser.uid ? "right" : "left"}`}
      >
        <div className="avatar"></div>
        <div className="text_wrapper">
          <div className="text">{content}</div>
        </div>
      </li>
    </div>
  );
}

export default ChatMessage;
