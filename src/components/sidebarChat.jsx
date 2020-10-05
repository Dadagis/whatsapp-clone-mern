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

  async function fetchConversations(jwt, user) {
    console.log(user);
    console.log("conversations fetch");
    await instance
      .get(`/api/conversations/user/${user._id}`, {
        headers: { "x-auth-token": jwt },
      })
      .then((response) => {
        setConversationsId(response.data);
      });

    console.log(user);
    if (conversationsId.lenght > 0) {
      const otherUser = conversationsId.find(user._id);
      console.log(otherUser);
    }
  }

  // fetchConversations(token, user);

  return (
    <div className="chats">
      <h1>Mes conversations</h1>
      <Conversation />
    </div>
  );
}
