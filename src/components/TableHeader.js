import React from 'react';
import Table, {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Tooltip from 'material-ui/Tooltip';
import Styler from '../lib/styler';

export default class TableHeader extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { headers, numSelected, onSelectAllClick, order, orderBy, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding='checkbox'>
            <Checkbox
              indeterminate={ numSelected > 0 && numSelected < rowCount }
              checked={ numSelected === rowCount }
              onChange={ onSelectAllClick } />
          </TableCell>
          { headers.map(column => {
            const headerClass = Styler(
              'header',
              column.id,
              (column.type === 'input' || column.type === 'dropdown') ? 'non_text' : '',
              column.numeric ? '' : 'non_numeric'
            );
            
            return (
              <TableCell
                key={ column.id }
                className={ headerClass }
                numeric={ column.numeric }
                padding={ column.disablePadding ? 'none' : 'default' } 
                sortDirection={ orderBy === column.id ? order : false }>
                <Tooltip
                  title="Sort"
                  placement={ column.numeric ? 'bottom-end' : 'bottom-start' }
                  enterDelay={ 300 }>
                  <TableSortLabel
                    active={ orderBy === column.id }
                    direction={ order }
                    onClick={ this.createSortHandler(column.id) }>
                    { column.label }
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}
