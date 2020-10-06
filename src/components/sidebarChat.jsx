import React, { useEffect, useState } from "react";
import "../style/sidebarChat.css";
import instance from "../axios";
import Conversation from "./Conversation";

export default function SidebarChat(props) {
  const [userObj, setUserObj] = useState({});
  const [conversationsId, setConversationsId] = useState([]);

  const { user, token } = props;

  // useEffect(() => {
  //   console.log("je suis dans set user");
  //   setUserObj(user);
  // }, []);

  return (
    <div className="chats">
      <h1>Mes conversations</h1>
      <Conversation />
    </div>
  );
}
