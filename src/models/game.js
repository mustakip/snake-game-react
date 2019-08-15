// import directions from './direction'

import directions from "./direction";

class Game {
  constructor(snake, wall, food) {
    this.snake = snake;
    this.wall = wall;
    this.food = food;
    this.nextStep = this.nextStep.bind(this);
    this.hasEnded = false;
  }

  nextStep(intervalId) {
    this.snake.move();
    const snakeColliding = this.wall.isSnakeBeyond(this.snake.position);
    if (snakeColliding) {
      clearInterval(intervalId);
      return false;
    }
    if (this.food.hasGotEaten(this.snake.position)) {
      this.snake.grow();
      // this.food.regenerate();
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
