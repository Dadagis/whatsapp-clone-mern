import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "../axios";
import instance from "../axios";
import isAuthenticated from "../services/authService";
import { Redirect } from "react-router-dom";

export default function ChatApp(props) {
  const [allMessages, setAllMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState("");
  const [currentUserNames, setCurrentUserNames] = useState([]);

  const jwt = localStorage.getItem("whatsAppToken");
  useEffect(() => {
    fetchUser();
    fetchMessages();
    fetchAllMessages();
  }, [props.location.pathname]);

  useEffect(() => {
    setCurrentChat(props.location.pathname.split("/")[2]);
  }, [currentChat, props.location.pathname]);

  useEffect(() => {
    conversations.map((conversation) => {
      if (conversation._id === currentChat) {
        setCurrentUserNames(
          conversation.usersNames.filter((names) => names !== user.name)
        );
      }
    });
  }, [conversations]);

  async function fetchUser() {
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
    const param = props.location.pathname.split("/")[2];
    await axios
      .get(
        `https://limitless-castle-62687.herokuapp.com/api/messages/${param}`,
        {
          headers: {
            "x-auth-token": jwt,
          },
        }
      )
      .then((response) => {
        setMessages(response.data);
      });
  }

  async function fetchAllMessages() {
    await axios
      .get(`https://limitless-castle-62687.herokuapp.com/api/messages/sync`, {
        headers: {
          "x-auth-token": jwt,
        },
      })
      .then((response) => {
        setAllMessages(response.data);
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
      instance
        .get(`/api/conversations/user/${user._id}`, {
          headers: { "x-auth-token": jwt },
        })
        .then((response) => {
          setconversations(response.data);
        });
    }
  }, [user]);

  const allTheMessages = allMessages;
  let array = [];
  conversations.map((conv) => {
    array = [
      ...array,
      allTheMessages.filter((message) => {
        return conv._id === message.conversation;
      }),
    ];
  });
  // console.log(array);
  if (!isAuthenticated()) return <Redirect to="/login" />;
  return (
    <div className="App-body">
      <Sidebar user={user} conversations={conversations} messages={messages} />
      <Chat
        messages={messages}
        user={user}
        token={jwt}
        currentChat={currentChat}
        currentUserNames={currentUserNames}
        location={props.location.pathname}
      />
    </div>
  );
}
