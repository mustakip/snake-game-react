// import directions from './direction'

import directions from "./direction";

class Game {
  constructor(snake, wall) {
    this.snake = snake;
    this.wall = wall;
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(intervalId) {
    let snakeColliding = this.wall.isSnakeColliding(this.snake.position);
    if (snakeColliding) {
      // console.log("GameDashboard end");
      clearInterval(intervalId);
      return false;
    }
    // console.log('game ', this);
    // console.log('position ', this.snake.position);
    this.snake.move();
    return true;
  }

  changeSnakeDirection(key) {
    let direction;
    switch (key) {
      case 'ArrowRight':
        console.log("turning right");
        direction = 'RIGHT';
        break;
      case 'ArrowLeft':
        console.log("turning left");
        direction = 'LEFT';
        break;
      case 'ArrowUp':
        console.log("turning up");
        direction = 'UP';
        break;
      case 'ArrowDown':
        console.log("turning down");
        direction = 'DOWN';
        break;
      default:
        return;
        break;
    }
    this.snake.changeDirection(directions[direction]);
  }
}

export default Game;
