import React, { Component } from "react";
import ChatHeaderInfos from "./chatHeaderInfos";
import ChatHeaderIcons from "./chatHeaderIcons";

export default class ChatHeader extends Component {
  render() {
    return (
      <div className="chat-header">
        <ChatHeaderInfos />
        <ChatHeaderIcons />
      </div>
    );
  }
}
