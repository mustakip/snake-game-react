const {Velocity} = require("./velocity");
const {Position} = require("./position");
const {Snake} = require("./snake");
const {Wall} = require("./wall");
const {Game} = require("./game");

const fs = require('fs');
const wallParts = JSON.parse(fs.readFileSync('./walls.json', 'UTF-8'), 'UTF-8').level1;

let initialVelocity = new Velocity("RIGHT", 1);
let initialPosition = new Position(1, 1);
let snake = new Snake(initialVelocity, initialPosition);
let wall = new Wall(wallParts);
let game = new Game(snake, wall);

game.nextStep();