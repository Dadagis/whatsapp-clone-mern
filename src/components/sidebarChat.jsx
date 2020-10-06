import React, { useEffect, useState } from "react";
import "../style/sidebarChat.css";
import instance from "../axios";
import Conversation from "./Conversation";

export default function SidebarChat(props) {
  const { user, conversations, messages } = props;
  console.log(conversations);

  return (
    <div className="chats">
      <h1>Mes conversations</h1>
      {conversations.map((conversation) => {
        return (
          <Conversation
            user={user}
            conversation={conversation}
            messages={messages}
          />
        );
      })}
    </div>
  );
}
