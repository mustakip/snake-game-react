const _ = require('lodash');

class Wall {
  constructor(wallParts) {
    this.wallParts = wallParts;
  }

  isSnakeColliding(position) {
    // console.log(position, this.wallParts)
    const collidingParts = this.wallParts.filter(part => part.x === position.x && part.y === position.y);
    // console.log('colliding on ', collidingParts)
    return collidingParts.length > 0;
  }
}

export default Wall;
