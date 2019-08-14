import React from "react";

class Board extends React.Component {

  render() {
    // console.log('this is snake body ', this.props.snake.body);
    const size = this.props.size;
    const snake = this.props.snake.body;
    const rows = new Array(size).fill(" ");
    const boardCells = rows.map(row => new Array(size).fill(' ').map(row => {
      return {isSnake: false, isHead: false}
    }));
    snake.forEach(part => {
      // console.log(part);
      // console.log('boardcells == ', boardCells);
      boardCells[part.y][part.x].isSnake = true;
    });


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
      // console.log(cell);
      if (cell.isSnake) {
        // console.log("returning is snake cell")
        return <div className="snakeCell"/>
      }
      return <div className="boardCell"></div>
    })
  }
}

export default Board;