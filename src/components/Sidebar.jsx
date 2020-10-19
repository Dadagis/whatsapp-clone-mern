import React from "react";
import "../style/Sidebar.css";
import SidebarHeader from "./common/sidebarHeader";
import SidebarSearch from "./common/sidebarSearch";
import SidebarChat from "./sidebarChat";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarSearch user={props.user} />
      <div className="chats" id="sidebar-chats-container">
        <SidebarChat
          user={props.user}
          conversations={props.conversations}
          messages={props.messages}
        />
      </div>
    </div>
  );
}
