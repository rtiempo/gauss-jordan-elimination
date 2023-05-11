import React, { useState } from 'react';
import {
  Button,
  Grid,
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
    const tableData = a.map((row) => [...row.slice(0, n), row[n]]);
    const column = Array.from({ length: n }, (_, i) => `x${i + 1}`);
    const columns = column.concat(['b']);

    setSolution({
      tableData,
      columns,
    });
  };

  return (
    <section id="program">
      <h1>Program</h1>
      <div id="calculator">
        <Typography variant='h5'>Gauss-Jordan Elimination Calculator</Typography>
        <form onSubmit={handleSubmit}>
          <Grid 
            container 
            direction='row' 
            spacing={2}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            <Grid item xs={8}>
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
            <Grid item xs={8}>
              <Button type='submit' variant='contained' color='primary' fullWidth>
                Calculate
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* <Typography variant="subtitle1">
          {solution}
        </Typography> */}
        {solution.tableData && (
          <TableContainer>
            <Table
              align="center"
              sx={{
                width: "auto",
                minWidth: "500px"
              }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "2px solid black",
                    "& th": {
                      fontSize: "25px",
                      color: "#5c5c5c"
                    }
                  }}
                >
                  {solution.columns.map((column, index) => {
                    if(index === solution.columns.length-1){
                      return <TableCell
                                key={index}
                                align="center"
                                sx={{
                                  border: "1px solid black",
                                  borderLeft: "2px solid red"
                                }}
                              >{column}</TableCell>                      
                    } 
                    return <TableCell
                              key={index}
                              align="center"
                              sx={{
                                border: "1px solid black"
                              }}
                            >{column}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {solution.tableData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      border: "1px solid black",
                      "& td": {
                        fontSize: "20px",
                      }
                    }}
                  >
                    {row.map((cell, index) => {
                      if(index === row.length-1){
                        return <TableCell
                                  key={index}
                                  align="right"
                                  sx={{
                                    border: "1px solid black",
                                    borderLeft: "2px solid red"
                                  }}
                                >{cell}</TableCell>
                      }
                      return <TableCell
                                  key={index}
                                align="center"
                                sx={{
                                  border: "1px solid black"
                                }}
                              >{cell}</TableCell>
                        
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </section>
  );
};

export default Calculator;
