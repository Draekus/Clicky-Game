import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import images from "./images";
import CardWrapper from "./components/CardWrapper";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images,
  };

  clickHandler = id => {
    console.log("This card was clicked and has an ID of " + id);
    let cards = this.state.images;
    let newScore = this.state.score + 1;

    // If the clicked card hasn't been clicked update the state
    console.log(cards[id]);
    if (!cards[id].clicked) {
      // Set the cards state to true
      cards[id].clicked = true;
      // Update the the state with the new cards and increase the score
      this.setState({
        score: newScore,
        images: cards,
      });
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: newScore,
        });
      }
    } else {
      console.log("This card has already been clicked.");
    }
  };
  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <CardWrapper
          images={this.state.images}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
