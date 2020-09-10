import React, { Component } from "react";
import "../style/Sidebar.css";
import SidebarHeader from "./common/sidebarHeader";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
      </div>
    );
  }
}
