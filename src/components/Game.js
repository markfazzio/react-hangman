import React, { Component } from "react";
import classnames from 'classnames';
import { randomWord } from '../utils/randomWord';
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
          answer: randomWord()
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

  generateGameOver(isWinner) {

    const alertClasses = classnames({
      'alert' : true,
      'alert-danger' : !isWinner,
      'alert-success' : isWinner
    });

    const resultMsg = isWinner ? 'YOU WIN!' : 'YOU LOSE :(';

    return (
      <div className={alertClasses} role="alert">
        <strong>{resultMsg}</strong>
      </div>
    );
  }

  reset = () => {
    this.setState({
      numWrong : 0,
      guessed : new Set(),
      answer : randomWord()
    });
  }

  renderGameState(gameOver, isWinner) {

    let gameState = this.generateButtons();

    if (gameOver || isWinner) {
      if (isWinner) {
        gameState = this.generateGameOver(true);
      } else {
        gameState = this.generateGameOver(false);
      }
    }

    return gameState;
  }

  render() {

    const { numWrong, answer } = this.state;
    const { maxWrong } = this.props;
    const isWinner = this.guessedWord().join("") === answer;
    const gameOver = numWrong >= maxWrong;
    
    return (
      <div className="game">
        <Header 
          numWrong={numWrong}
          maxWrong={maxWrong}
          reset={this.reset}
        />
        <div className="game__container container">
          <div className="row">
            <div className="col-sm-12">
                <div className="game__instructions">
                    <h1>React Hangman</h1>
                    <p>Guess a letter!</p>
                </div>
                <StickMan numWrong={numWrong} />
                <Word 
                  gameOver={gameOver}
                  isWinner={isWinner}
                  guessedWord={gameOver ? answer : this.guessedWord()}   
                />
                <div className="board">
                  {this.renderGameState(gameOver, isWinner)}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
