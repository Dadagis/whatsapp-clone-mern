import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => (
          <p className={`chat-message ${message.received && "chat-receiver"}`}>
            <span className="message-name">{message.name}</span>
            {message.message}
            <span className="message-timestamp">
              {new Date().toLocaleString()}
            </span>
          </p>
        ))}
      </div>
    );
  }
}
