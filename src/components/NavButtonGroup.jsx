import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';
import NavButton from './NavButton';

export default class NavButtonGroup extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    initial: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: (props.initial === 0 || props.initial) ? props.initial : null
    }
  }

  handleSelect = (index) => {
    this.setState({ selected: index });

    this.props.items[index].onClick();
  }

  render() {
    const { selected } = this.state;
    const { items } = this.props;

    const navButtons = items.map((item, index) => {
      const properties = {
        key: item.name,
        item,
        active: selected === index ? 'active' : null,
        onSelect: event => this.handleSelect(index)
      }

      return <NavButton { ...properties }>{ item.display }</NavButton>
    });

    return (
      <div className='nav_button_group'>
        { navButtons }
      </div>
    )
  }
}
