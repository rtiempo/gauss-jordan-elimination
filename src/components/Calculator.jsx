import React, { useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

const Calculator = () => {
  const [matrix, setMatrix] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Parse the input matrix
    const lines = matrix.trim().split('\n');
    const n = lines.length;
    const a = lines.map((line) =>
      line
        .trim()
        .split(/\s+/)
        .map((value) => parseFloat(value))
    );

    // Perform Gauss-Jordan elimination
    for (let i = 0; i < n; i++) {
      // Find pivot row and swap
      let max = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(a[j][i]) > Math.abs(a[max][i])) {
          max = j;
        }
      }
      [a[i], a[max]] = [a[max], a[i]];

      // Make pivot element 1
      const pivot = a[i][i];
      for (let j = i; j <= n; j++) {
        a[i][j] /= pivot;
      }

      // Eliminate all other entries in this column
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          const factor = a[j][i];
          for (let k = i; k <= n; k++) {
            a[j][k] -= factor * a[i][k];
          }
        }
      }
    }

    // Format the output as an array of rows and columns
    const tableData = a.map((row) => [...row.slice(0, n), '|', row[n]]);
    const columns = Array.from({ length: n + 1 }, (_, i) => `x${i + 1}`);

    setSolution({
      tableData,
      columns,
    });
  };

  return (
    <div>
      <Typography variant='h5'>Gauss-Jordan Elimination Calculator</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container direction='column'>
          <Grid item>
            <TextField
              label='Matrix'
              multiline
              rows={5}
              variant='outlined'
              fullWidth
              required
              value={matrix}
              onChange={(e) => setMatrix(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type='submit' variant='contained' color='primary'>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* <Typography variant="subtitle1">
        {solution}
      </Typography> */}
      {solution.tableData && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {solution.columns.map((column) => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {solution.tableData.map((row, index) => (
                <TableRow key={index}>
                  {row.map((cell, index) => (
                    <TableCell key={index}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Calculator;
