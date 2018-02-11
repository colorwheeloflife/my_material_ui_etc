import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Styler from '../lib/styler';

export default class TabGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;
    
    const tabs = items.map(( item, index ) => {
      return <Tab label={ item } />
    });

    return (
      <AppBar 
        className='TABS TABS TABS TABS'
        color="default"
        position="static" >
        <Tabs 
          indicatorColor="primary"
          fullWidth
          onChange={ this.handleChange }
          scrollable
          scrollButtons="auto"
          textColor="primary"
          value={ value } >
          { tabs }
        </Tabs>
      </AppBar>
    )
  }
}