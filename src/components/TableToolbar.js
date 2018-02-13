import React from 'react';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Styler from '../lib/styler';

let TableToolbar = props => {
  const { actionButton, classes, numSelected, title } = props;
  
  const rootClass = Styler(
    'toolbar',
    classes.root,
    numSelected > 0 ? classes.highlight : ''
  );
  
  const actionsClass = Styler(
    'actions',
    classes.actions,
    numSelected > 0 ? classes.highlight : ''
  );
  
  const actionButtonClass = Styler(
    'action_button',
    classes.button,
    numSelected > 0 ? actionButton.label : 'hidden'
  )

  return (
    <Toolbar
      className={ rootClass } >
      <div className={ classes.title }>
        { numSelected > 0 ? (
          <Typography variant='subheading'> { numSelected } selected </Typography>
        ) : (
          <Typography variant='title'> { title } </Typography>
        )}
      </div>
      <div className={ classes.spacer } />
      <div className={ actionsClass }>
        <Button 
          className={ actionButtonClass }
          color={ actionButton.color }
          onClick={ actionButton.func }
          variant='raised' >
          { actionButton.label }
        </Button>
      </div>  
    </Toolbar>
  );
};

export default TableToolbar;