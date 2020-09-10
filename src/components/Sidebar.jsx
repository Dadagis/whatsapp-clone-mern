import React, { Component } from "react";
import "../style/Sidebar.css";
import SidebarHeader from "./common/sidebarHeader";
import SidebarSearch from "./common/sidebarSearch";
import SidebarChat from "./sidebarChat";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarSearch />
        <div className="chats">
          <SidebarChat />
        </div>
      </div>
    );
  }
}
