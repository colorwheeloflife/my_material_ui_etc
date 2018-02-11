import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';
import IconButton from 'material-ui/IconButton';
import Styler from '../lib/styler';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.dark,
          backgroundColor: lighten(theme.palette.secondary.light, 0.4),
        }
      : {
          color: lighten(theme.palette.secondary.light, 0.4),
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let TableToolbar = props => {
  const { classes, numSelected } = props;
  
  const rootClass = Styler(
    classes.root,
    numSelected > 0 ? classes.highlight : ''
  );

  return (
    <Toolbar
      className={ rootClass } >
      <div className={ classes.title }>
        { numSelected > 0 ? (
          <Typography variant='subheading'> { numSelected } selected </Typography>
        ) : (
          <Typography variant='title'>Nutrition</Typography>
        )}
      </div>
      <div className={ classes.spacer } />
      <div className={ classes.actions }>
        { numSelected > 0 ? (
          <Tooltip title='Delete'>
            <IconButton aria-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title='Filter list'>
            <IconButton aria-label='Filter list'>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

export default TableToolbar;