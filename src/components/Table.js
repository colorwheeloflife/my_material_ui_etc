import React from 'react';
import PropTypes from 'prop-types';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

export default class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  }
  
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
  
    this.setState({ selected: newSelected });
  };
  
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
  
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
  
    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
  
    this.setState({ data, order, orderBy });
  };
  
  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { actionButton, classes, headers, title } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    
    const tableRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
      const isSelected = this.isSelected(n.id);
      
      return (
        <TableRow
          hover
          onClick={event => this.handleClick(event, n.id)}
          role="checkbox"
          aria-checked={isSelected}
          tabIndex={-1}
          key={n.id}
          selected={isSelected}
        >
          <TableCell padding="checkbox">
            <Checkbox checked={ isSelected } />
          </TableCell>
          { headers.map(header => {
            const properties = {
              key: header.id,
              numeric: header.numeric,
              padding: header.disablePadding ? 'none' : 'default',
            }
            return <TableCell { ...properties }> { n[header.id] } </TableCell>
          }, this)}
        </TableRow>
      );
    });
    
    return (
      <Paper className={ classes.root }>
        <TableToolbar 
          actionButton={ actionButton }
          classes={ classes }
          numSelected={ selected.length }
          title={ title } />
        <div className={ classes.tableWrapper }>
        
        
          <Table className={ classes.table }>
          
            <TableHeader
              headers={ headers }
              numSelected={ selected.length }
              order={ order }
              orderBy={ orderBy }
              onSelectAllClick={ this.handleSelectAllClick }
              onRequestSort={ this.handleRequestSort }
              rowCount={ data.length }
            />
            
            <TableBody>
              
              { tableRows }
              
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={ 6 } />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={ 6 }
                  count={ data.length }
                  rowsPerPage={ rowsPerPage }
                  page={ page }
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                  }}
                  onChangePage={ this.handleChangePage }
                  onChangeRowsPerPage={ this.handleChangeRowsPerPage }
                />
              </TableRow>
            </TableFooter>
          </Table>
          
          
        </div>
      </Paper>
    );
  }
}
