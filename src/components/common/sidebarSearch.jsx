import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function SidebarSearch(props) {
  return (
    <div className="sidebar-search">
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input placeholder="Chercher ou démarrer un nouveau chat" type="text" />
      </div>
    </div>
  );
}
