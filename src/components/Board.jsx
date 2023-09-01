import PropTypes from 'prop-types';
import { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);

    //set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  //create a board based on the nrows and ncols, each cell randomly lit 
  createBoard() {
    //board will be an array-of-arrays of true/false values
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  //render the game board
  makeBoard() {
    let tableBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coordinates = `${y}-${x}`;
        row.push(
          <Cell key={ coordinates }
            isLit={ this.state.board[y][x] } />
        );
      }
      tableBoard.push(
        <tr key={ y }>{ row }</tr>
      );
    }
    console.log(tableBoard);
    return tableBoard;
  }

  render() {
    return (
      <table className='flex justify-center align-middle'>
        <tbody>
          { this.makeBoard() }
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  nrows: PropTypes.number,
  ncols: PropTypes.number,
  chanceLightStartsOn: PropTypes.number
};