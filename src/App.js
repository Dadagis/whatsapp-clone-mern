import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ChatApp from "./components/chatApp";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={ChatApp} />
      </Switch>
    </div>
  );
}

export default App;
