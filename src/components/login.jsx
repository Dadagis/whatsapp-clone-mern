import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <label htmlFor="email">E-mail</label>
        <input type="text" placeholder="toto@exemple.fr" id="email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" placeholder="*********" id="password" />
      </div>
    );
  }
}
