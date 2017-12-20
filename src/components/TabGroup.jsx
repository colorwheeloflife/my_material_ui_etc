import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';
import Tab from './Tab';

export default class TabGroup extends Component {
  static propTypes = {
    initial: PropTypes.number,
    items: PropTypes.array.isRequired,
    onTabSelected: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: (props.initial === 0 || props.initial) ? props.initial : null
    }
  }

  handleSelect = (index, name) => {
    if (this.state.selected === index) {
      this.setState({ selected: null });
    } else {
      this.setState({ selected: index });
      this.props.onTabSelected(index);
    }
  }

  render() {
    const { selected } = this.state;
    const { items } = this.props;

    const tabs = items.map((item, index) => {
      const properties = {
        key: item.name,
        item,
        active: selected === index ? 'active' : null,
        onSelect: event => this.handleSelect(index)
      }

      return <Tab { ...properties } />
    });

    return (
      <div className='tab_group'>
        { tabs }
      </div>
    )
  }
}
