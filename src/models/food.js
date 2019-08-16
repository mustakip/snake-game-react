class Food {
  constructor(initialPosition) {
    this.position = initialPosition;
  }

  hasGotEaten(snakePosition) {
    return this.position.isEqual(snakePosition);
  }

  setPosition(position) {
    this.position = position;
  }

}

export default Food;