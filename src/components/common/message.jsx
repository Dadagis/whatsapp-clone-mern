import React, { Component } from "react";

export default class Message extends Component {
  render() {
    const { user, currentChat } = this.props;
    return (
      <div>
        {this.props.messages.map((message) => {
          console.log(message);
          if (message.conversation === currentChat) {
            return (
              <p
                key={message._id}
                className={`chat-message ${
                  message.emitter === user._id ? "chat-receiver" : ""
                }`}
              >
                <span className="message-name">{message.name}</span>
                {message.message}
                <span className="message-timestamp">
                  {new Date(
                    message.timestamp || message.createdAt
                  ).toLocaleString()}
                </span>
              </p>
            );
          }
        })}
      </div>
    );
  }
}
