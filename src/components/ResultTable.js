import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { QueryDataContext } from './QueryDataContext';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export function ResultTable(props) {
  const classes = useStyles();
  const [data, setData] = useContext(QueryDataContext);


  return (

    <TableContainer component={Paper}>
      <h2>total = {data.total_count}</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>URL</StyledTableCell>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.items.map((row) => (
            <StyledTableRow key={row.html_url}>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.html_url}
              </StyledTableCell>
              
              <StyledTableCell>{row.state}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
