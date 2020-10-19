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
    const filtered = users.filter((user) => user.name.includes(input));
    return setFiltered(filtered);
  }, [input]);

  console.log("filtered", filtered);

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
        <ul></ul>
      </div>
    </div>
  );
}
