import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'success', 'danger']),
    size: PropTypes.oneOf(['small', 'large'])
  };

  render() {
    const { type, size, children } = this.props;

    const baseClass = Styler(
      size,
      type
    );

    return (
      <button className={ baseClass }>
        { children }
      </button>
    )
  }
}
