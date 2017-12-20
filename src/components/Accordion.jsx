import React from 'react';

export default function Accordion(props) {
  return (
    <div className='accordion'>
      { props.children }
    </div>
  )
}
