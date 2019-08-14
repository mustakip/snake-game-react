import React from "react";

class Board extends React.Component {

  render() {
    const size = this.props.size;
    const snake = this.props.snake.body;
    const rows = new Array(size+1).fill(" ");
    const boardCells = rows.map(row => new Array(size+1).fill(' ').map(row => {
      return {isSnake: false, isHead: false}
    }));
    snake.forEach(part => {
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
      if (cell.isSnake) {
        return <div className="snakeCell"/>
      }
      return <div className="boardCell"></div>
    })
  }
}

export default Board;