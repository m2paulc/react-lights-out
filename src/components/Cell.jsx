import { Component } from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('handleClick here');
  }

  render() {
    let classes = `Cell ${this.props.isLit ? 'Cell-lit' : ''}`;

    return (
      <td className={ classes } onClick={ this.handleClick } />
    );
  }
}

Cell.propTypes = {
  isLit: PropTypes.bool
};