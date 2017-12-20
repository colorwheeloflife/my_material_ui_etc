import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

function Tab(props) {
  const { active, item, onSelect } = props;

  const tabClass = Styler(
    'tab',
    active
  );

  return (
    <div
      className={ tabClass }
      onClick={ onSelect }>
      { item.name }
    </div>
  )
}

export default Tab;
