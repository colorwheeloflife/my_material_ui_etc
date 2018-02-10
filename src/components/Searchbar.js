import React, { Component } from 'react';
import SearchSymbol from '../assets/search';
import Styler from '../lib/styler';

export default class Searchbar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        value: ''
      }
    }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.value);
    }
  }

  render() {
    const { className, onSearch, size } = this.props;
    const { value } = this.state;

    const searchbarClass = Styler(
        'searchbar',
        className,
        size
      );

    return (
      <div className={ searchbarClass }>
        <div className='input_wrapper'>
          <input
            placeholder='Search'
            value={ value }
            onChange={ this.handleInput }
            onKeyPress={ this.handleKeyPress }>
          </input>
        </div>
        <div className='button' onClick={ event => onSearch(value) }>
          <SearchSymbol />
        </div>
      </div>
    )
  }
}
