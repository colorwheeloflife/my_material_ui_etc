import React from 'react';

import { storiesOf } from '@storybook/react';

import { Input, Searchbar, Selectfield, Textfield } from '../src/index.js';


/* Input */
const input = {
  autocomplete: 'off',
  name: 'first_name',
  label: 'First Name',
  placeholder: 'Placeholder',
  size: 'small skinny'
};

storiesOf('Input/General', module)
  .add('basic', () => <Input { ...input }>Basic</Input>);



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
  name: 'standard'
};

storiesOf('Selectfield/General', module)
  .add('basic', () => <Selectfield { ...select }>Basic</Selectfield>);



/* Textfield */
const textfield = {
  autocomplete: 'off',
  name: 'first_name',
  label: 'per',
  size: 'skinny'
};

storiesOf('Textfield/General', module)
  .add('basic', () => <Textfield { ...textfield }>Basic</Textfield>);

  
