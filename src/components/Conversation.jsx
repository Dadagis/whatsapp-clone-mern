import React from "react";
import AvatarIcon from "./common/avatarIcon";
import _ from "lodash";
import "../style/sidebarChat.css";
import { NavLink } from "react-router-dom";

export default function Conversation(props) {
  const { user, conversation, messages } = props;
  return (
    <NavLink
      activeStyle={{ textDecoration: "none", color: "black" }}
      style={{ textDecoration: "none", color: "black" }}
      to={`/chats/${conversation._id}`}
    >
      <div className="sidebar-chat">
        <AvatarIcon />
        <div className="chat-info">
          <h2 className="names">
            {conversation.usersNames
              .filter((names) => names !== user.name)
              .map((name) => {
                return <span key={name}>{name} </span>;
              })}
          </h2>
          <p>{_.last(messages).message}</p>
        </div>
      </div>
    </NavLink>
  );
}
