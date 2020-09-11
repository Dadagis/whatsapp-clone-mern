import React, { Component } from "react";
import AvatarIcon from "./avatarIcon";

export default class ChatHeaderInfos extends Component {
  render() {
    return (
      <div className="chat-header-infos">
        <div className="avatar">
          <AvatarIcon />
        </div>
        <div className="infos">
          <h3>room name</h3>
          <p>last seen at</p>
        </div>
      </div>
    );
  }
}
