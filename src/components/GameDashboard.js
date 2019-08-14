import React from "react";
import Board from './Board';
import Velocity from "../models/velocity";
import Position from "../models/position";
import Snake from "../models/snake";
import Wall from "../models/wall";
import Game from "../models/game";
import walls from "../walls";
import directions from "../models/direction";

class GameDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game: this._createGame()};
    this._handleClick = this._handleClick.bind(this);
    this._startGame = this._startGame.bind(this);
  }

  _createGame() {
    const wallParts = walls.level1;
    // console.log(wallParts.length);
    const initialVelocity = new Velocity(directions.RIGHT, 1);
    const initialPosition = new Position(1, 1);
    const snake = new Snake(initialVelocity, initialPosition);
    const wall = new Wall(wallParts);
    const game = new Game(snake, wall);
    this.game = game;
    return game;
  }

  _startGame() {
    this.intervalId = setInterval(() => {
      // console.log('interval id ==', this.intervalId);
      const moveSuccessful = this.game.nextStep(this.intervalId);
      // console.log(this.game.snake.position);
      if (!moveSuccessful) return;
      this.setState({game: this.game});
    }, 300)
  }

  componentWillMount() {
    this._createGame();
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
  }

  _handleClick(event) {
    this.game.changeSnakeDirection(event.key);
  }

  render() {
    return <div className="game" onKeyDown={this._handleClick}>
      <Board size={this.props.size} snake={this.state.game.snake}/>
      <button onClick={this._startGame}>Start</button>
    </div>
  }
}

export default GameDashboard;