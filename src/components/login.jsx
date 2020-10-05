import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/form.css";
import instance from "../axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await instance
        .post("/api/auth/login/", { email: email, password: password })
        .then((response) => {
          localStorage.setItem("whatsAppToken", response.data);
        });
      props.history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    if (input.id === "email") {
      setEmail(input.value);
    } else {
      setPassword(input.value);
    }
  };

  return (
    <div className="form">
      <h1>Connexion</h1>
      <form>
        <div className="form-inputs">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            placeholder="toto@exemple.fr"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="*********"
            id="password"
            value={password}
            onChange={handleChange}
          />
          <button onClick={handleClick} type="submit">
            Se connecter
          </button>
        </div>
      </form>
      <div className="link-div">
        <Link to="/register" className="link">
          Je n'ai pas de compte
        </Link>
      </div>
    </div>
  );
}
