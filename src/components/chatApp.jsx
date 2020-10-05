import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "../axios";

export default function ChatApp() {
  // state = {
  //   messages: [],
  //   setMessages: [],
  // };

  // componentDidMount() {
  //   axios
  //     .get("/api/messages/sync", {
  //       headers: {
  //         "x-auth-token":
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY3MTRhNGMzM2IwZTBiNjE2YzhjOTQiLCJpYXQiOjE2MDA1OTE0NDF9.DMGE9ZpHvYw2vy2ruR6Zqj_H63OtPmu-usp0n-Pj3Bc",
  //       },
  //     })
  //     .then((response) => {
  //       this.setState({ setMessages: response.data });
  //       //   setMessages(response.data);
  //     });
  // }

  // componentWillUpdate() {
  //   const pusher = new Pusher("dbb1d6a74095b5cc4f07", {
  //     cluster: "eu",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", (data) => {
  //     this.setState({ setMessages: [...this.state.setMessages, data] });
  //   });

  //   // à modifier, ne fonctionne que dans un Hook pour le moment
  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/messages/sync", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY3MTRhNGMzM2IwZTBiNjE2YzhjOTQiLCJpYXQiOjE2MDA1OTE0NDF9.DMGE9ZpHvYw2vy2ruR6Zqj_H63OtPmu-usp0n-Pj3Bc",
        },
      })
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

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

  console.log(messages);
  return (
    <div className="App-body">
      <Sidebar />
      <Chat messages={messages} />
    </div>
  );
}
