import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class Progress extends Component {
  static propTypes = {
    animation: PropTypes.number,
    color: PropTypes.string,
    completed: PropTypes.number,
    size: PropTypes.oneOf(['small', 'large'])
  };

  static defaultProps = {
    completed: 0,
    color: '#266fb5',
    animation: 200
  }

  render() {
    const { animation, color, completed, size } = this.props;

    const containerClass = Styler(
      'progressbar_container',
      size
    );

    const progressClass = Styler(
      'progressbar_progress',
      size
    );

    const style = {
      backgroundColor: color,
      transition: `width ${animation}ms`,
      width: completed + '%',
    }

    return (
      <div className={ containerClass }>
        <div className={ progressClass } style={ style }>
        </div>
        <span className={ size }>
          { `${completed}%` }
        </span>
      </div>
    )
  }
}
