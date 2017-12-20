import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class AccordionHeader extends Component {
  static propTypes = {
    open: PropTypes.bool,
    header: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open || false
    }
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { header } = this.props;

    const headerClass = Styler(
      'header',
      open ? 'active' : ''
    );

    const contentClass = Styler(
      'content',
      open ? 'active' : ''
    );

    return (
      <section>
        <div className={ headerClass } onClick={ this.handleOpen }>
          { header }
        </div>
        <div className={ contentClass }>
          { this.props.children }
        </div>
      </section>
    )
  }
}
