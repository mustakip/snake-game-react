import React from "react";
import Board from './Board';
import Velocity from "../models/velocity";
import Position from "../models/position";
import Snake from "../models/snake";
import Wall from "../models/wall";
import Game from "../models/game";
import directions from "../models/direction";
import Food from "../models/food";

class GameDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game: this._createGame()};
    this._handleClick = this._handleClick.bind(this);
    this._startGame = this._startGame.bind(this);
    this._stopGame = this._stopGame.bind(this);
  }

  _createGame() {
    const initialVelocity = new Velocity(directions.RIGHT, 1);
    const initialSnakePosition = new Position(0, 0);
    const initialFoodPosition = new Position(5, 5);
    const snake = new Snake(initialVelocity, initialSnakePosition);
    const wall = new Wall(this.props.size);
    const food = new Food(initialFoodPosition);
    const game = new Game(snake, wall, food);
    this.setState({game: game});
    this.game = game;
    return game;
  }

  _startGame() {
    this.intervalId = setInterval(() => {
      const moveSuccessful = this.game.nextStep(this.intervalId);
      if (!moveSuccessful) {
        this.game.hasEnded = true;
        this._createGame();
        return;
      }
      this.setState({game: this.game});
    }, 200)
  }

  _handleClick(event) {
    this.game.changeSnakeDirection(event.key);
  }

  _stopGame() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.game.hasEnded) {
      this._createGame();
    }
    return <div className="game" onKeyDown={this._handleClick}>
      <Board size={this.props.size} snake={this.state.game.snake} food={this.state.game.food}/>
      <button onClick={this._startGame}>Start</button>
      <button onClick={this._stopGame}>Stop</button>
    </div>
  }
}

export default GameDashboard;