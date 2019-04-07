import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { AmountTable, AmountTableRoot } from './styles'

const SimpleTable = props => {
  let no = 1

  return (
    <div>
      { props.data && props.data.length > 0 &&
      <Paper css={AmountTableRoot}>
        <Table css={AmountTable}>
          <TableHead>
            <TableRow>
              <TableCell width="10%" align="center">No. </TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Cash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((data, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" align="center">
                  {no++}
                </TableCell>
                <TableCell align="right">{data.total}</TableCell>
                <TableCell align="right">Rp. {data.money}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      }
      { props.amountLeft > 0 &&
        <Paper css={AmountTableRoot} style={{ marginTop: 15 }}>
          <Table css={AmountTable}>
            <TableBody>

              {/* display the amount left if there is a amount left */}
              <TableRow>
                <TableCell colSpan={2} align="left">Amount Left</TableCell>
                <TableCell align="right">Rp. {props.amountLeft}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      }
    </div>
  )
}

SimpleTable.displayName = 'SimpleTable'

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  amountLeft: PropTypes.number
}

export default memo(SimpleTable)
