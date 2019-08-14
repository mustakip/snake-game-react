// import directions from './direction'

import directions from "./direction";

class Game {
  constructor(snake, wall) {
    this.snake = snake;
    this.wall = wall;
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(intervalId) {
    this.snake.move();
    const snakeColliding = this.wall.isSnakeBeyond(this.snake.position);
    if (snakeColliding) {
      clearInterval(intervalId);
      return false;
    }
    return true;
  }

  changeSnakeDirection(key) {
    let direction;
    switch (key) {
      case 'ArrowRight':
        direction = 'RIGHT';
        break;
      case 'ArrowLeft':
        direction = 'LEFT';
        break;
      case 'ArrowUp':
        direction = 'UP';
        break;
      case 'ArrowDown':
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
