import React from "react";
import { IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderIcons() {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  const logout = () => {
    localStorage.removeItem("whatsAppToken");
  };
  return (
    <div className="header-icons">
      <IconButton>
        <DonutLargeIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon onClick={handleClick} />
      </IconButton>
      <NavLink
        activeStyle={{ textDecoration: "none", color: "black" }}
        style={{ textDecoration: "none", color: "black" }}
        to={"/login"}
      >
        <p
          className="disconect"
          hidden={hidden ? "hidden" : ""}
          onClick={logout}
        >
          Se déconnecter
        </p>
      </NavLink>
    </div>
  );
}
