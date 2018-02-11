import React from 'react';

import { storiesOf } from '@storybook/react';

import { 
  Input, 
  PlusButton,
  Searchbar, 
  Selectfield, 
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
  name: 'standard'
};

storiesOf('Selectfield/General', module)
  .add('basic', () => <Selectfield { ...select }>Basic</Selectfield>);


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

  
