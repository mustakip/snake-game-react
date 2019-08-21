import directions from "./direction";
import Position from "./position";

class Game {
  constructor(snake, wall, food) {
    this.snake = snake;
    this.wall = wall;
    this.food = food;
    this.score = 0;
    this.nextStep = this.nextStep.bind(this);
    this.hasEnded = false;
  }

  nextStep(intervalId) {
    this.snake.move();
    const snakeCollidingToWalls = this.wall.isSnakeBeyond(this.snake.position);
    const snakeCollidingToItself = this.snake.isCollidingToItself();
    if (snakeCollidingToWalls || snakeCollidingToItself) {
      clearInterval(intervalId);
      return false;
    }
    if (this.food.hasGotEaten(this.snake.position)) {
      this.score += 1;
      this.snake.grow();
      this.generateFood();
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

  generateFood() {
    const foodPosition = this.getFoodPositionInEmptySpace();
    this.food.setPosition(foodPosition);
  }

  getRandomPositionWithinWalls() {
    const xCo = Math.floor(Math.random() * this.wall.size);
    const yCo = Math.floor(Math.random() * this.wall.size);
    return new Position(xCo, yCo);
  }

  getFoodPositionInEmptySpace() {
    const positionCandidates = new Array(this.snake.getLength() + 2)
      .fill(" ")
      .map(candidate => this.getRandomPositionWithinWalls());
    return positionCandidates.filter(position => !this.snake.isPartOfBody(position))[0];
  }
}

export default Game;
