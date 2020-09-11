import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <p className="chat-message">
        <span className="message-name">David</span>
        Message
        <span className="message-timestamp">{new Date().toLocaleString()}</span>
      </p>
    );
  }
}
