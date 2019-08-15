import React from "react";

class Board extends React.Component {

  render() {
    const size = this.props.size;
    const snake = this.props.snake.body;
    const snakeHead = this.props.snake.position;
    const rows = new Array(size+1).fill(" ");
    const boardCells = rows.map(row => new Array(size+1).fill(' ').map(row => {
      return {isSnake: false, isHead: false, isFood: false}
    }));
    snake.forEach(part => {
      boardCells[part.y][part.x].isSnake = true;
    });

    const headCell = boardCells[snakeHead.y][snakeHead.x];
    headCell.isSnake = true;
    headCell.isHead = true;

    const foodPosition = this.props.food.position;
    boardCells[foodPosition.y][foodPosition.x].isFood = true;



    return <div className="board">
      {this._createBoard(boardCells)}
    </div>
  }

  _createBoard(boardRows) {
    return boardRows.reverse().map(row => {
      return <div className="boardRow">
        {this._createRow(row)}
      </div>
    })
  }

  _createRow(rowCells) {
    return rowCells.map(cell => {
      if (cell.isSnake) {
        if (cell.isSnake && cell.isHead) {
          return <div className="headCell"/>
        }
        return <div className="snakeCell"/>
      }
      if(cell.isFood) {
        return <div className="foodCell"/>
      }
      return <div className="boardCell"></div>
    })
  }
}

export default Board;