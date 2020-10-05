import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "../axios";
import JwtDecode from "jwt-decode";
import instance from "../axios";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});

  const jwt = localStorage.getItem("whatsAppToken");
  useEffect(() => {
    instance
      .get("/api/users/me", { headers: { "x-auth-token": jwt } })
      .then((response) => {
        setUser({ name: response.data.name, email: response.data.email });
      });
  }, [jwt]);

  useEffect(() => {
    axios
      .get("/api/messages/sync", {
        headers: {
          "x-auth-token": jwt,
        },
      })
      .then((response) => {
        setMessages(response.data);
      });
  }, [jwt]);

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

  return (
    <div className="App-body">
      <Sidebar />
      <Chat messages={messages} user={user} />
    </div>
  );
}
