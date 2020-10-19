import React, { Component } from "react";
import Message from "./message";

export default class ChatBody extends Component {
  componentDidUpdate() {
    this.newData.scrollTop = this.newData.scrollHeight;
  }
  render() {
    this.props.location === "/chats"
      ? console.log("NO MESSAGES")
      : console.log("MESSAGES");
    return (
      <div className="chat-body" ref={(ref) => (this.newData = ref)}>
        {this.props.location === "/chats" ? (
          <div className="no-messages">
            <h1>Sélectionnez une conversation</h1>
          </div>
        ) : (
          <Message
            messages={this.props.messages}
            user={this.props.user}
            currentChat={this.props.currentChat}
          />
        )}
      </div>
    );
  }
}
