import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

function TableHeader(props) {
  const { header, index, size } = props;

  return (
    <th
      className={ size }
      key={ index }>
      { header.display }
    </th>
  )
};

function TableRow(props) {
  const { row, index, size } = props;

  return (
    <tr
      className='row'
      key={ index }>
      { row.map((item, row_index) => {
        return (
          <td
            key={ row_index }>
            { item }
          </td>
        )
      }) }
    </tr>
  )
}

export default class Table extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    size: PropTypes.oneOf(['small', 'large'])
  };

  render() {
    const { headers, size, rows } = this.props;

    const tableClass = Styler(
      'table',
      size
    );

    const tableHeaders = headers.map((header, index) => {
      const properties = {
        key: index,
        header,
        size
      };

      return <TableHeader { ...properties } />
    });

    const tableRows = rows.map((row, index) => {
      const properties = {
        key: index,
        row,
        size
      }

      return <TableRow { ...properties } />
    });

    return (
      <table className={ tableClass }>
        <thead className={ size }>
          <tr>
            { tableHeaders }
          </tr>
        </thead>
        <tbody className={ size }>
          { tableRows }
        </tbody>
      </table>
    )
  }
}
