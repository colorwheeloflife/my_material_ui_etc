import React from 'react';

import Styler from '../lib/styler';

function Radio(props) {
  const { item, index, checked, orientation, onSelect } = props;

  const itemClass = Styler(
    'item',
    orientation
  );

  return (
    <div className={ itemClass }>
      <input
        className='radio'
        name={ item.name }
        value={ index }
        type='radio'
        checked={ checked }
        onChange={ onSelect }/>
      <label
        className='name'
        onClick={ onSelect }>
        { item.name }
      </label>
    </div>
  )
}

export default Radio;
