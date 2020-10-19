import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function SidebarSearch(props) {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const { user } = props;

  const jwt = localStorage.getItem("whatsAppToken");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/", {
        headers: { "x-auth-token": jwt },
      })
      .then((response) => {
        return setUsers(response.data);
      });
  }, []);

  useEffect(() => {
    let filtered = users
      .filter(
        (user) =>
          user.name.includes(input) || user.name.toLowerCase().includes(input)
      )
      .slice(0, 10);
    if (input === "") {
      filtered = [];
    }
    return setFiltered(filtered);
  }, [input]);

  const setValue = ({ currentTarget: input }) => {
    setInput(input.value);
  };

  const handleClick = (user_id) => {
    axios.post(
      "http://localhost:4000/api/conversations/",
      { users: [user._id, user_id] },
      {
        headers: { "x-auth-token": jwt },
      }
    );
    setFiltered([]);
  };

  return (
    <div className="sidebar-search">
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input
          value={input}
          onChange={setValue}
          placeholder="Chercher ou démarrer un nouveau chat"
          type="text"
        />
        <ul className="users-display">
          {filtered.length >= 1
            ? filtered.map((user) => {
                return (
                  <NavLink
                    activeStyle={{ textDecoration: "none", color: "black" }}
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/"}
                  >
                    <li
                      key={user._id}
                      onClick={() => handleClick(user._id)}
                      className="users-list"
                    >
                      {user.name}
                    </li>
                  </NavLink>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
