import React, { Component } from "react";
import "../style/Chat.css";
import ChatHeader from "./common/chatHeader";
import ChatBody from "./common/chatBody";
import ChatText from "./common/chatText";

export default class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <ChatBody />
        <ChatText />
      </div>
    );
  }
}
