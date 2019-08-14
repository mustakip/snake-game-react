import directions from "./direction";

const {UP, DOWN, LEFT, RIGHT} = directions;

class Snake {

  constructor(initialVelocity, initialPosition) {
    this.velocity = initialVelocity;
    this.position = initialPosition;
    this.body = [initialPosition];
  }


  move() {
    console.log("moving snake");
    switch (this.velocity.direction.value) {
      case UP.value:
        this.position.changePosition(UP.action);
        break;
      case LEFT.value:
        this.position.changePosition(LEFT.action);
        break;
      case DOWN.value:
        this.position.changePosition(DOWN.action);
        break;
      case RIGHT.value:
        this.position.changePosition(RIGHT.action);
        break;
    }
    this.body.push(this.position);
    this.body.pop();
  }

  changeDirection(direction) {
    if (direction.oppositeDirection === this.velocity.direction.value) {
      return;
    }
    this.velocity.setDirection(direction);
  }
}


export default Snake;