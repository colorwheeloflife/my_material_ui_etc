import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Styler from '../lib/styler';

export default class Textfield extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['skinny', 'small', 'full', 'big'])
  };
  
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { autoComplete, className, label, name, placeholder, size } = this.props;
    // const { handleInput, value } = this.props;

    const textFieldClass = Styler(
      'text_field',
      className,
      size
    );

    return (
      <TextField
        autoComplete={ autoComplete }
        className={ textFieldClass }
        hintText={ placeholder }
        floatingLabelText={ label || null }
        name={ name }
        onChange={ this.handleInput } />
    )
  }
}