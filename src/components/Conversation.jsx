import React from "react";
import AvatarIcon from "./common/avatarIcon";
import "../style/sidebarChat.css";

export default function Conversation(props) {
  return (
    <div className="sidebar-chat">
      <AvatarIcon />
      <div className="chat-info">
        <h2>room name</h2>
        <p>dernier message</p>
      </div>
    </div>
  );
}
