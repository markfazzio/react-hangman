import React, { Component } from "react";
import Header from './Header';
import StickMan from "./StickMan";
import Word from './Word';

import './Game.css';

class Game extends Component {
  static defaultProps = {
    maxWrong: 6,
    parts: [
      "head",
      "torso",
      "leftArm",
      "rightArm",
      "leftLeg",
      // "leftFoot",
      "rightLeg",
      // "rightFoot"
    ]
  };

  constructor(props) {
      super(props);

      this.state = {
          numWrong: 0,
          guessed: new Set(),
          answer: "apple"
      };
  }

  guessedWord() {
      return this.state.answer
        .split("")
        .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess = (e) => {
    let ltr = e.target.value;
    this.setState(st => ({
        guessed: st.guessed.add(ltr),
        numWrong: st.numWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  generateButtons() {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
            key={ltr}
            className="btn btn-primary btn-sm btn-letter"
            value={ltr}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(ltr)}
        >
            {ltr}
        </button>
      ));
  }

  render() {

    const { numWrong } = this.state;

    return (
      <div className="game">
        <Header numWrong={numWrong} />
        <div className="game__container container">
          <div className="row">
            <div className="col-sm-12">
                <div className="game__instructions">
                    <h1>React Hangman</h1>
                    <p>Guess a letter!</p>
                </div>
                <StickMan numWrong={numWrong} />
                <Word guessedWord={this.guessedWord()} />
                <div className="keyboard">
                    {this.generateButtons()}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
