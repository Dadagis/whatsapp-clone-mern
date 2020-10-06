import React from "react";
import "../style/sidebarChat.css";
import Conversation from "./Conversation";

export default function SidebarChat(props) {
  const { user, conversations, messages } = props;

  return (
    <div className="chats">
      <h1>Mes conversations</h1>
      {conversations.map((conversation) => {
        return (
          <Conversation
            key={conversation._id}
            user={user}
            conversation={conversation}
            messages={messages}
          />
        );
      })}
    </div>
  );
}
