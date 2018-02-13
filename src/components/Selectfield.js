import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import { ListItemText } from 'material-ui/List';
import Styler from '../lib/styler';

export default class Selectfield extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: this.props.initial || '',
      value_array: []
    }
  }

  handleChange = event => {
    if (this.props.multiple) {
      this.setState({ value_array: event.target.value });
    } else {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    const { className, initial, items, label, multiple, name, size } = this.props;
    const { value, value_array } = this.state;
    
    const formClass = Styler(
      'select_field_container',
      className,
      size
    );
    
    const menu_items = items.map((item, index) => {
      const menuItemClass = Styler(
        'menu_item',
        size
      );
      
      return <MenuItem
               className={ menuItemClass }
               key={ index }
               value={ item !== 'None' ? index + 1 : '' }> 
               { item !== 'None' ? item : <em>{ item }</em> }
             </MenuItem>;
    });
    
    const menu_items_multiple = items.map((item, index) => {
      return <MenuItem key={ item } value={ item }>
               <Checkbox checked={ value_array.indexOf(item) > -1 } />
               <ListItemText primary={ item } />
             </MenuItem>;
    });
    
    return (
      <FormControl className={ formClass }>
        <InputLabel htmlFor={ name }> { label } </InputLabel>
        <Select
          inputProps={{ name: name }}
          multiple={ multiple || false }
          onChange={ this.handleChange }
          renderValue={ multiple ? selected => selected.join(', ') : null }
          value={ multiple ? value_array : value } >
          { multiple ? menu_items_multiple : menu_items }
        </Select>
      </FormControl>
    );
  }
}
