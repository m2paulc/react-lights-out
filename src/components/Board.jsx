import PropTypes from 'prop-types';
import { Component } from 'react';
import Cell from './Cell';
import './Board.css';

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
            isLit={ this.state.board[y][x] }
            flipCellsAroundMe={ () => this.flipCells(coordinates) }
          />
        );
      }
      tableBoard.push(
        <tr key={ y }>{ row }</tr>
      );
    }
    return (
      <table className='Board'>
        <tbody>
          { tableBoard }
        </tbody>
      </table>
    );
  }

  flipCells(coord) {
    console.log('flipCells has been called');
    let { nrows, ncols } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    const flipCell = (y, x) => {
      if (y >= 0 && y < nrows && x >= 0 && x < ncols) {
        board[y][x] = !board[y][x];
      }
    };
    //flip initial cell
    flipCell(y, x);
    //flip cell left of initial cell
    flipCell(y, x - 1);
    //flip cell top of initial cell
    flipCell(y - 1, x);
    //flip cell right of initial cell 
    flipCell(y, x + 1);
    //flip cell below of initial cell 
    flipCell(y + 1, x);

    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
  }

  render() {
    return (
      <div>
        {
          this.state.hasWon ? (
            <div className='winner'>
              <span className='neon-orange'>YOU</span>
              <span className='neon-blue'>WIN!</span>
            </div>
          ) : (
            <div>
              <div className='Board-title'>
                <div className='neon-orange'>Lights</div>
                <div className='neon-blue'>Out</div>
              </div>
              { this.makeBoard() }
            </div>
          )
        }
      </div>
    );
  }
}

Board.propTypes = {
  nrows: PropTypes.number,
  ncols: PropTypes.number,
  chanceLightStartsOn: PropTypes.number
};