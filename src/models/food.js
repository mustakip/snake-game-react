class Food {
  constructor(initialPosition) {
    this.position = initialPosition;
  }

  hasGotEaten(snakePosition) {
    return this.position.isEqual(snakePosition);
  }
}

export default Food;