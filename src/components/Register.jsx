import React from "react";
import { Link } from "react-router-dom";
import "../style/form.css";
import axios from "../axios";
import { useState } from "react";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("https://limitless-castle-62687.herokuapp.com/api/users/", {
          name: name,
          email: email,
          password: password,
        })
        .then((response) => {
          localStorage.setItem(
            "whatsAppToken",
            response.headers["x-auth-token"]
          );
        });

      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = ({ currentTarget: input }) => {
    if (input.id === "name") {
      setName(input.value);
    } else if (input.id === "email") {
      setEmail(input.value);
    } else {
      setPassword(input.value);
    }
  };

  return (
    <div className="form">
      <h1>Inscription</h1>
      <form>
        <div className="form-inputs">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            placeholder="Toto"
            id="name"
            value={name}
            onChange={handleChange}
          />
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
            S'inscrire
          </button>
        </div>
      </form>
      <div className="link-div">
        <Link to="/login" className="link">
          J'ai déja un compte
        </Link>
      </div>
    </div>
  );
}
