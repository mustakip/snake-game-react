class Position {
  constructor(xCo,yCo) {
    this.x = xCo;
    this.y = yCo;
  }

  changePosition(action) {
    this.x += action.x;
    this.y += action.y;
  }
}

export default Position