import React from "react";
import { Link } from "react-router-dom";
import "../style/form.css";

export default function Login() {
  return (
    <div className="form">
      <h1>Connexion</h1>
      <div className="form-inputs">
        <label htmlFor="email">E-mail</label>
        <input type="text" placeholder="toto@exemple.fr" id="email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" placeholder="*********" id="password" />
        <button type="submit">Se connecter</button>
      </div>
      <div className="link-div">
        <Link to="/register" className="link">
          Je n'ai pas de compte
        </Link>
      </div>
    </div>
  );
}
