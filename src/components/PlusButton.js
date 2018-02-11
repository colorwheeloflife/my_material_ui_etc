import React from 'react';
import Button from 'material-ui/Button';
import PlusSymbol from '../assets/plus';

function PlusButton(props) {
  const { onClick } = props;
  
  return (
    <Button 
      centerRipple={ true }
      className='plus_button' 
      color="primary"
      onClick={ onClick }
      variant="raised">
      <PlusSymbol />
    </Button>
  )
}

export default PlusButton;
