import React, { Component } from "react";
import Message from "./message";

export default class ChatBody extends Component {
  componentDidUpdate() {
    this.newData.scrollTop = this.newData.scrollHeight;
  }
  render() {
    console.log("LOCATION", this.props.location.split("/"));
    this.props.location === "/chats/"
      ? console.log("NO MESSAGES")
      : console.log("MESSAGES");
    return (
      <div className="chat-body" ref={(ref) => (this.newData = ref)}>
        <Message
          messages={this.props.messages}
          user={this.props.user}
          currentChat={this.props.currentChat}
        />
      </div>
    );
  }
}
