import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";


class App extends Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <div>
        <p>This is a test.</p>     
        <Card />                                                                             
      </div>
    );
  }
}

export default App;
