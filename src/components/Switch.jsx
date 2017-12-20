import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class Switch extends Component {
  static propTypes = {
    on: PropTypes.bool,
    onClick: PropTypes.func,
    name: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      on: props.on || false
    }
  }

  handleClick = (on) => {
    this.setState({ on: !on });
    this.props.onClick();
  }

  render() {
    const { on } = this.state;
    const { name } = this.props;

    const switchClass = Styler(
      'switch',
      on ? 'active' : null
    );

    const toggleClass = Styler(
      'toggle',
      on ? 'active' : null
    );

    return (
      <div
        className={ switchClass }
        name={ name }
        onClick={ event => this.handleClick(on) }>
        <div className={ toggleClass }>
        </div>
      </div>
    )
  }
}
