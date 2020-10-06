import React from "react";
import AvatarIcon from "./common/avatarIcon";
import _ from "lodash";
import "../style/sidebarChat.css";

export default function Conversation(props) {
  const { user, conversation, messages } = props;
  console.log(messages);
  return (
    <div className="sidebar-chat">
      <AvatarIcon />
      <div className="chat-info">
        <h2 className="names">
          {conversation.usersNames
            .filter((names) => names !== user.name)
            .map((name) => {
              return <span>{name} </span>;
            })}
        </h2>
        <p>{_.last(messages).message}</p>
      </div>
    </div>
  );
}
