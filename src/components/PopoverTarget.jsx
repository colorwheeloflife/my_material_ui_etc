import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

import Popover from './Popover';

export default class PopoverTarget extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false
    }
  }

  mouseEnter = () => {
    this.setState({
      popoverOpen: true
    });
  }

  mouseLeave = () => {
    this.setState({
      popoverOpen: false
    });
  }

  render() {
    const { content } = this.props;

    return (
      <div
        className='popover_target'
        onMouseEnter={ this.mouseEnter }
        onMouseLeave={ this.mouseLeave }>
        ?
        <Popover
          content={ content }
          open={ this.state.popoverOpen }/>
      </div>
    )
  }
}
