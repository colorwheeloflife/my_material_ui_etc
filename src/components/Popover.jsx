import React from 'react';

import Styler from '../lib/styler';

function Popover(props) {
  const { content, open } = props;

  const popoverClass = Styler(
    'popover',
    open ? 'active' : ''
  );

  return (
    <div className={ popoverClass }>
      { content }
    </div>
  )
}

export default Popover;
