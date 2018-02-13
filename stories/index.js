import React from 'react';

import { storiesOf } from '@storybook/react';

import { 
  Input, 
  PlusButton,
  Searchbar, 
  Selectfield, 
  TabGroup,
  EnhancedTable,
  Textarea, 
  Textfield 
} from '../src/index.js';


/* Input */
const input = {
  autocomplete: 'off',
  name: 'first_name',
  label: 'First Name',
  placeholder: 'Placeholder'
};

storiesOf('Input/General', module)
  .add('basic', () => <Input { ...input }>Basic</Input>);


/* PlusButton */
const plusbutton = {
  onClick: onClick()
};

function onClick() {
  console.log('click');
}

storiesOf('PlusButton/General', module)
  .add('basic', () => <PlusButton { ...plusbutton }>Basic</PlusButton>);


/* Searchbar */
const search = {
  onSearch: Search(),
  size: 'small'
};

function Search(value) {
  console.log(value);
}

storiesOf('Searchbar/General', module)
  .add('basic', () => <Searchbar { ...search }>Basic</Searchbar>);


/* Selectfield */
const select = {
  items: ['None', 'Item 1', 'Item 2', 'Item 3'],
  label: 'label',
  // multiple: true,
  name: 'standard',
  size: 'skinny'
};

storiesOf('Selectfield/General', module)
  .add('basic', () => <Selectfield { ...select }>Basic</Selectfield>);


/* TabGroup */
const tabs = {
  items: ['Option A', 'Option B', 'Option C']
};

storiesOf('TabGroup/General', module)
  .add('basic', () => <TabGroup { ...tabs }>Basic</TabGroup>);

  
  
/* Table */
const table = {
  classes: {
    root: 'root',
    tableWrapper: 'tableWrapper',
    table: 'table',
    title: 'title',
    spacer: 'spacer',
    actions: 'actions'
  },
  headers: [
    { id: 'name', numeric: false, type: 'normal', disablePadding: true, label: 'Dessert' },
    { id: 'category', numeric: false, type: 'normal', disablePadding: true, label: 'Category' },
    { id: 'amount', numeric: true, type: 'input', disablePadding: false, label: 'Amount' },
    { id: 'unit', numeric: false, type: 'dropdown', disablePadding: false, label: 'Unit', items: ['grams', 'servings'] },
    { id: 'calories', numeric: true, type: 'normal', disablePadding: false, label: 'Calories' },
    { id: 'protein', numeric: true, type: 'normal', disablePadding: false, label: 'Protein (g)' },
    { id: 'carbs', numeric: true, type: 'normal', disablePadding: false, label: 'Carbs (g)' },
    { id: 'fat', numeric: true, type: 'normal', disablePadding: false, label: 'Fat (g)' }
  ],
  title: 'Nutrition',
  actionButton: {
    color: 'primary',
    label: 'Add To Cookbook',
    func: AddToCookbook()
  }
}

function AddToCookbook() {
  console.log('cookbook!');
}

  
storiesOf('EnhancedTable/General', module)
  .add('basic', () => <EnhancedTable { ...table }>Basic</EnhancedTable>);



/* Textarea */
const textarea = {
  autocomplete: 'off',
  name: 'first_name',
  label: 'First Name',
  placeholder: 'Placeholder',
  size: 'full'
};

storiesOf('Textarea/General', module)
  .add('basic', () => <Textarea { ...textarea }>Basic</Textarea>);


/* Textfield */
const textfield = {
  autocomplete: 'off',
  name: 'first_name',
  label: 'per',
  size: 'skinny'
};

storiesOf('Textfield/General', module)
  .add('basic', () => <Textfield { ...textfield }>Basic</Textfield>);

  
