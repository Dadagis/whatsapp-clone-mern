import React, { Component } from "react";
import HeaderIcons from "./headerIcons";
import AvatarIcon from "./avatarIcon";

export default class SidebarHeader extends Component {
  render() {
    return (
      <div className="sidebar-header">
        <AvatarIcon />
        <HeaderIcons />
      </div>
    );
  }
}
