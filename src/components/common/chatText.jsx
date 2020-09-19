import React, { Component } from "react";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";

export default class ChatText extends Component {
  state = {
    input: "",
  };

  render() {
    const sendMessage = async (e) => {
      e.preventDefault();

      await axios.post("/api/messages", {
        message: this.state.input,
        name: "nom test",
        received: true,
      });

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
        <MoodIcon />
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
        <MicIcon />
      </div>
    );
  }
}
