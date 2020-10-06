import React, { Component } from "react";
import "../style/Chat.css";
import ChatHeader from "./common/chatHeader";
import ChatBody from "./common/chatBody";
import ChatText from "./common/chatText";

export default class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <ChatHeader currentUserNames={this.props.currentUserNames} />
        <ChatBody messages={this.props.messages} user={this.props.user} />
        <ChatText
          user={this.props.user}
          token={this.props.token}
          currentChat={this.props.currentChat}
        />
      </div>
    );
  }
}
