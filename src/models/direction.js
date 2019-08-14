const directions = {
  UP: {value: "UP", action: {x: 0, y: 1}, oppositeDirection: "DOWN"},
  DOWN: {value: "DOWN", action: {x: 0, y: -1}, oppositeDirection: "UP"},
  RIGHT: {value: "RIGHT", action: {x: 1, y: 0}, oppositeDirection: "LEFT"},
  LEFT: {value: "LEFT", action: {x: -1, y: 0}, oppositeDirection: "RIGHT"}
}


export default directions;
