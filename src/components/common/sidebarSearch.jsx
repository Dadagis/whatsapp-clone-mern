import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

export default function SidebarSearch(props) {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

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

  const setValue = ({ currentTarget: input }) => {
    setInput(input.value);
  };

  useEffect(() => {
    let filtered = users
      .filter((user) => user.name.includes(input))
      .slice(0, 10);
    return setFiltered(filtered);
  }, [input]);

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
                  <li key={user._id} className="users-list">
                    {user.name}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
