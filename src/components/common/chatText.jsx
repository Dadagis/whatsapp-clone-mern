import React, { Component } from "react";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";
import { IconButton } from "@material-ui/core";

export default class ChatText extends Component {
  state = {
    input: "",
  };

  render() {
    const sendMessage = async (e) => {
      e.preventDefault();

      await axios.post(
        "/api/messages",
        {
          message: this.state.input,
          name: "nom test",
          received: true,
        },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY3MTRhNGMzM2IwZTBiNjE2YzhjOTQiLCJpYXQiOjE2MDA1OTE0NDF9.DMGE9ZpHvYw2vy2ruR6Zqj_H63OtPmu-usp0n-Pj3Bc",
          },
        }
      );

      clearInput();
    };

    const setInput = ({ currentTarget: input }) => {
      this.setState({ input: input.value });
    };

    const clearInput = () => {
      this.setState({ input: "" });
    };

    return (
      <div className="chat-text">
        <IconButton>
          <MoodIcon />
        </IconButton>
        <form>
          <input
            value={this.state.input}
            onChange={setInput}
            placeholder="Écrire un message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Envoyer
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    );
  }
}
