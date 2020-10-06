import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "../axios";
import JwtDecode from "jwt-decode";
import instance from "../axios";

export default function ChatApp(props) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState("");
  const [currentUserNames, setCurrentUserNames] = useState([]);

  const jwt = localStorage.getItem("whatsAppToken");
  useEffect(() => {
    fetchUser();
    fetchMessages();
  }, []);

  useEffect(() => {
    console.log("je suis dans current chat");
    setCurrentChat(props.location.pathname.split("/")[2]);
  }, [currentChat]);

  useEffect(() => {
    console.log("je suis dans current user names");
    conversations.map((conversation) => {
      if (conversation._id === currentChat) {
        setCurrentUserNames(
          conversation.usersNames.filter((names) => names !== user.name)
        );
      }
    });
  }, [conversations]);

  async function fetchUser() {
    console.log("Je suis dans setUser");
    await instance
      .get("/api/users/me", { headers: { "x-auth-token": jwt } })
      .then((response) => {
        return setUser({
          name: response.data.name,
          email: response.data.email,
          _id: response.data._id,
        });
      });
  }

  async function fetchMessages() {
    console.log("je suis dans set messages");
    await axios
      .get("/api/messages/sync", {
        headers: {
          "x-auth-token": jwt,
        },
      })
      .then((response) => {
        setMessages(response.data);
      });
  }

  useEffect(() => {
    const pusher = new Pusher("dbb1d6a74095b5cc4f07", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      console.log("conversations fetch");
      instance
        .get(`/api/conversations/user/${user._id}`, {
          headers: { "x-auth-token": jwt },
        })
        .then((response) => {
          setconversations(response.data);
        });
    }
  }, [user]);

  return (
    <div className="App-body">
      <Sidebar user={user} conversations={conversations} messages={messages} />
      <Chat
        messages={messages}
        user={user}
        token={jwt}
        currentChat={currentChat}
        currentUserNames={currentUserNames}
      />
    </div>
  );
}
