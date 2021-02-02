import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search"
import Saved from "./components/Saved"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </Router>
    </div>
  );
}


export default App;
