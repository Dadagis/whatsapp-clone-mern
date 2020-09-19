import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => (
          <p
            key={message._id}
            className={`chat-message ${message.received && "chat-receiver"}`}
          >
            <span className="message-name">{message.name}</span>
            {message.message}
            <span className="message-timestamp">
              {new Date(
                message.timestamp || message.createdAt
              ).toLocaleString()}
            </span>
          </p>
        ))}
      </div>
    );
  }
}
