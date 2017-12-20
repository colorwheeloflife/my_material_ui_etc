import React from 'react';

import { storiesOf } from '@storybook/react';

import { 
  Accordion,
  AccordionHeader,
  Button, 
  CheckboxGroup, 
  Dropdown, 
  Input,
  NavButtonGroup,
  PopoverTarget,
  Progress,
  RadioGroup,
  Switch,
  Table,
  TabGroup 
} from '../src/index.js';



/* Accordion */
storiesOf('Accordion/Input', module)
  .add('input', () => {
    return (
      <Accordion>
        <AccordionHeader header='2017-8-28'>
          <Input { ...input } />
        </AccordionHeader>
        <AccordionHeader header='2017-06-27'>
          <Input { ...input } />
          <Input { ...input } />
        </AccordionHeader>
      </Accordion>
    )
  });

storiesOf('Accordion/Open', module)
  .add('input', () => {
    return (
      <Accordion>
        <AccordionHeader header='2017-8-28' open={ true }>
          <Input { ...input } />
        </AccordionHeader>
        <AccordionHeader header='2017-06-27'>
          <Input { ...input } />
          <Input { ...input } />
        </AccordionHeader>
      </Accordion>
    )
  });

storiesOf('Accordion/Table', module)
  .add('table', () => {
    return (
      <Accordion>
        <AccordionHeader header='2017-08-28'>
          <Table { ...table } />
        </AccordionHeader>
        <AccordionHeader header='2017-06-27'>
          <Table { ...table } />
        </AccordionHeader>
      </Accordion>
    )
  })
  

/* Button */
const items = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'].map(item => ({ name: item }));

storiesOf('Button/General', module)
  .add('basic', () => <Button>Basic</Button>);

storiesOf('Button/Type', module)
  .add('primary', () => <Button type='primary'>Primary</Button>)
  .add('success', () => <Button type='success'>Success</Button>)
  .add('danger', () => <Button type='danger'>Danger</Button>);

storiesOf('Button/Size', module)
  .add('small', () => <Button size='small'>Small</Button>)
  .add('large', () => <Button size='large'>Large</Button>);
  

/* CheckboxGroup */
const checkboxGroup = {
  items,
  initial: 0
};

storiesOf('CheckboxGroup/General', module)
  .add('basic', () => <CheckboxGroup { ...checkboxGroup }>Basic</CheckboxGroup>);

storiesOf('CheckboxGroup/Labelled', module)
  .add('label', () => <CheckboxGroup label="Label"{ ...checkboxGroup }>Labelled</CheckboxGroup>);

storiesOf('CheckboxGroup/Orientation', module)
  .add('horizontal', () => <CheckboxGroup orientation='horizontal' { ...checkboxGroup }>Horizontal</CheckboxGroup>);


/* Dropdown */
const dropdown = {
  items,
  initial: 0
};

storiesOf('Dropdown/General', module)
  .add('basic', () => <Dropdown { ...dropdown }>Basic</Dropdown>);

storiesOf('Dropdown/Size', module)
  .add('small', () => <Dropdown size='small' { ...dropdown }>Small</Dropdown>)
  .add('large', () => <Dropdown size='large' { ...dropdown }>Large</Dropdown>);


/* Input */
const input = {
  name: "category",
  placeholder: "placeholder"
}

storiesOf('Input/General', module)
  .add('basic', () => <Input { ...input }>Basic</Input>);

storiesOf('Input/General', module)
  .add('full', () => <Input width="full" { ...input }>Full</Input>);


/* NavButtonGroup */
function onClick() {
  console.log('clicked!');
}

const navButtonGroup = {
  items: [{
    name: 'home',
    display: 'Home',
    onClick: onClick
  }, {
    name: 'map',
    display: 'Map Environment',
    onClick: onClick
  }, {
    name: 'dashboard',
    display: 'Dashboard',
    onClick: onClick
  }]
}

storiesOf('NavButtonGroup/General', module)
  .add('basic', () => <NavButtonGroup { ...navButtonGroup }>Basic</NavButtonGroup>);


/* PopoverTarget */
const popover = {
  content: 'Stuff and things. Stuff and things. Stuff and things. Stuff and things. Stuff and things.'
};

storiesOf('Popover/General', module)
  .add('basic', () => <PopoverTarget { ...popover }></PopoverTarget>)


/* Progress */
const progress = {
  completed: 100,
};

const progress_10 = {
  completed: 10,
};

const progress_30 = {
  completed: 30,
};

const progress_80 = {
  completed: 80,
};

storiesOf('Progress/General', module)
  .add('basic', () => <Progress { ...progress }/>);

storiesOf('Progress/Completion', module)
  .add('10%', () => <Progress { ...progress_10 }/>)
  .add('30%', () => <Progress { ...progress_30 }/>)
  .add('80%', () => <Progress { ...progress_80 }/>);

storiesOf('Progress/Size', module)
  .add('small', () => <Progress size='small' { ...progress }/>)
  .add('large', () => <Progress size='large' { ...progress }/>);

storiesOf('Progress/Color', module)
  .add('amethyst', () => <Progress color='#9b59b6' { ...progress }/>)
  .add('emerald', () => <Progress color='#2ecc71' { ...progress }/>);


/* RadioGroup */
const radioGroup = {
  items,
  initial: 0
};

storiesOf('RadioGroup/General', module)
  .add('basic', () => <RadioGroup { ...radioGroup }>Basic</RadioGroup>);

storiesOf('RadioGroup/Labelled', module)
  .add('label', () => <RadioGroup label="Label"{ ...radioGroup }>Labelled</RadioGroup>);

storiesOf('RadioGroup/Orientation', module)
  .add('horizontal', () => <RadioGroup orientation='horizontal' { ...radioGroup }>Horizontal</RadioGroup>);


/* Switch */
const switchToggle = {
  onClick: function() { console.log('click!'); },
  on: true,
  name: 'terrain model'
};

storiesOf('Switch/General', module)
  .add('basic', () => <Switch { ...switchToggle }>Basic</Switch>);


/* Table */
const rows = [
  {
    site: 'Northwood Chips',
    region: 'Fraser - Fort George',
    date: '2017-09-01'
  },
  {
    site: 'Northwood Hog',
    region: 'Fraser - Fort George',
    date: '2017-09-01'
  },
  {
    site: 'Intercon',
    region: 'Fraser - Fort George',
    date: '2017-09-01'
  }
];

const headers = [
  { display: 'Site', identifier: 'site' },
  { display: 'Region', identifier: 'region' },
  { display: 'Flown Date', identifier: 'date' }
];

const converted = rows.map(row => headers.map(header => row[header.identifier]));

converted.forEach(c => console.log(c));

const table = {
  headers: headers,
  rows: converted
}

storiesOf('Table/General', module)
  .add('basic', () => <Table { ...table }></Table>);

storiesOf('Table/Size', module)
  .add('small', () => <Table size='small' { ...table }></Table>)
  .add('large', () => <Table size='large' { ...table }></Table>);


/* TabGroup */
function onTabSelected(index) {
  console.log(`tab selected: ${index}`);
}

const tabGroup = {
  items: ['blue', 'green', 'yellow', 'orange', 'red', 'purple'].map(item => ({ name: item })),
  onTabSelected: onTabSelected
};

storiesOf('TabGroup/General', module)
  .add('basic', () => <TabGroup { ...tabGroup }>Basic</TabGroup>);
