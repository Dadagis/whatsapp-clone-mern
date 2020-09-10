import React, { Component } from "react";
import Avatar from "./HeaderAvatar";
import HeaderIcons from "./headerIcons";

export default class SidebarHeader extends Component {
  render() {
    return (
      <div className="sidebar-header">
        <Avatar />
        <HeaderIcons />
      </div>
    );
  }
}
