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
          name: this.props.user.name,
          emitter: this.props.user._id,
          conversation: this.props.currentChat,
        },
        {
          headers: {
            "x-auth-token": this.props.token,
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

    const disable = () => {
      const areMessages = document.getElementsByClassName("no-messages");
      return areMessages.length >= 1 ? true : false;
    };
    console.log(disable());

    return (
      <div className="chat-text">
        <IconButton>
          <MoodIcon />
        </IconButton>
        <form>
          <input
            value={this.state.input}
            onChange={setInput}
            placeholder={
              disable() ? "Sélectionnez une conversation" : "Écrire un message"
            }
            type="text"
            disabled={disable() ? "disabled" : ""}
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
