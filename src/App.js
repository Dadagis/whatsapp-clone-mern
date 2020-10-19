import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import ChatApp from "./components/chatApp";
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chats/:id" component={ChatApp} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chats" component={ChatApp} />
        <Redirect from="/" exact to="/chats" />
      </Switch>
    </div>
  );
}

export default App;
