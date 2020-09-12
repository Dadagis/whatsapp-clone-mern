import React, { Component } from "react";
import Message from "./message";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="chat-body">
        <Message messages={this.props.messages} />
      </div>
    );
  }
}
