class Position {
  constructor(xCo,yCo) {
    this.x = xCo;
    this.y = yCo;
  }

  changePosition(action) {
    this.x += action.x;
    this.y += action.y;
  }

  getPosition(action) {
    const newX = this.x + action.x;
    const newY = this.y + action.y;
    return new Position(newX, newY);
  }

  getDuplicate() {
    return new Position(this.x, this.y);
  }

  isEqual(position) {
    return this.x === position.x && this.y === position.y;
  }
}

export default Position