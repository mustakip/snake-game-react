import directions from "./direction";

const {UP, DOWN, LEFT, RIGHT} = directions;

class Snake {

  constructor(initialVelocity, initialPosition) {
    this.velocity = initialVelocity;
    this.position = initialPosition;
    this.body = [];
  }


  move() {
    if(this.body.length > 0) {
      this.body.unshift(this.position.getDuplicate());
      const a = this.body.pop();
    }
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
  }

  isCollidingToItself() {
    return this.body.some(position => position.isEqual(this.position));
  }

  grow() {
    const directionToGrowIn = this.velocity.direction.oppositeDirection;
    const growingPartPosition = this.position.getPosition(directions[directionToGrowIn].action);
    this.body.push(growingPartPosition);
  }

  changeDirection(direction) {
    if (direction.oppositeDirection === this.velocity.direction.value) {
      return;
    }
    this.velocity.setDirection(direction);
  }
}


export default Snake;