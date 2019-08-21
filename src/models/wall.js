class Wall {
  constructor(size) {
    this.size = size;
  }

  isSnakeBeyond(position) {
    return this.isSnakeBeyondVerticalWalls(position) || this.isSnakeBeyondHorizontalWalls(position);

  }

  isSnakeBeyondHorizontalWalls(position) {
    return position.y < 0 || position.y > this.size;
  }

  isSnakeBeyondVerticalWalls(position) {
    return position.x < 0 || position.x >this.size;
  }
}

export default Wall;
