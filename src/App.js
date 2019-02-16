import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import images from "./images";
import CardWrapper from "./components/CardWrapper";
import SimpleModalWrapped from "./components/SimpleModalWrapped";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images,
  };

  // Fisher Yates Shuffle Algorithm in ES6 *Credit: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffleImages = images => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  clickHandler = id => {
    const cards = this.state.images;
    const newScore = this.state.score + 1;

    // If the clicked card hasn't been clicked update the state
    if (!cards[id].clicked) {
      // Set the cards state to true
      cards[id].clicked = true;
      // Update the the state with the shuffled cards and increase the score
      this.setState({
        score: newScore,
        images: this.shuffleImages(cards),
      });
      // If the current score is greater than the highscore update the current highscore
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: newScore,
        });
      }
    } else {
      // If the clicked card has already been clicked
      // Map over the cards and set all the clicked states to false
      const resetCards = cards.map(card => {
        card.clicked = false;
        return card;
      });
      // Update the state with the reset cards and a score of 0
      this.setState({
        score: 0,
        images: resetCards,
      });
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
        <SimpleModalWrapped ref="modal" />
      </div>
    );
  }
}

export default App;
