import React from 'react';

import Styler from '../lib/styler';

function NavButton(props) {
  const { item, active, children, onSelect } = props;

  const buttonClass = Styler(
    'nav_button',
    active
  );

  return (
    <div
      className={ buttonClass }
      onClick={ onSelect }>
      { children }
    </div>
  )
}

export default NavButton;
