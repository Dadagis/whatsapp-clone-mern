import React, { Component } from "react";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";

export default class ChatText extends Component {
  render() {
    return (
      <div className="chat-text">
        <MoodIcon />
        <form>
          <input placeholder="Écrire un message" type="text" />
          <button type="submit">Envoyer</button>
        </form>
        <MicIcon />
      </div>
    );
  }
}
