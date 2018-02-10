import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import Styler from '../lib/styler';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['skinny', 'small', 'normal', 'full', 'big'])
  };
  
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { autocomplete, className, label, name, placeholder, size } = this.props;
    // const { handleInput, value } = this.props;
    const { value } = this.state;

    const containerClass = Styler(
      'input_container',
      className,
      size
    );

    return (
      <div className={ containerClass }>
        <div className={ label ? 'labell' : 'hidden' }> { label } </div>
        <div className='wrapper'>
          <input
            autoComplete={ autocomplete }
            className='input'
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ this.handleInput }/>
        </div>
      </div>
    )
  }
}