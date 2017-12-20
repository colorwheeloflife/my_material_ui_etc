import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';
import Radio from './Radio';

export default class RadioGroup extends Component {
  static propTypes = {
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    initial: PropTypes.number,
    orientation: PropTypes.oneOf(['horizontal'])
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: (props.initial === 0 || props.initial) ? props.initial : null
    }
  }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    const { label, items, orientation } = this.props;

    const labelClass = Styler(
      'label',
      label ? null : 'hidden'
    );

    const itemsClass = Styler(
      'items',
      orientation
    );

    const itemClass = Styler(
      'item',
      orientation
    );

    const radios = items.map((item, index) => {
      const properties = {
        key: item.name,
        orientation,
        item,
        checked: selected === index,
        onSelect: event => this.handleSelect(index)
      }

      return <Radio { ...properties } />
    });

    return (
      <div className='radio_group'>
        <div className={ labelClass }>
          { label }
        </div>
        <div className={ itemsClass }>
          { radios }
        </div>
      </div>
    )
  }
}
