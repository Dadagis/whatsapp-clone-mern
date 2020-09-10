import React, { Component } from "react";
import AvatarIcon from "./common/avatarIcon";
import "../style/sidebarChat.css";

export default class SidebarChat extends Component {
  render() {
    return (
      <div className="chats">
        <h1>Mes conversations</h1>
        <div className="sidebar-chat">
          <AvatarIcon />
          <div className="chat-info">
            <h2>room name</h2>
            <p>dernier message</p>
          </div>
        </div>
      </div>
    );
  }
}
