import * as React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Specification = () => {
  return (
    <section id='specification'>
      <h1>Specification</h1>
      <h3>About the method</h3>
      <p>
        To solve a system of linear equations using Gauss-Jordan elimination you
        need to do the following steps:
      </p>
      <ul>
        <li>
          To represent a system of linear equations in an augmented matrix form
        </li>
        <li>
          Then performing the 3 row operations on it until the reduced row
          echelon form (RREF) is achieved
        </li>
        <li>Lastly, we can easily recognize the solutions from the RREF</li>
      </ul>
      <h3>About the program</h3>
      <p>
        In solving a system of linear equations using Gauss-Jordan elimination
        the following steps are done:
      </p>
      <ul>
        <li>Accept an input.</li>
        <li>Parse the input matrix.</li>
        <li>Perform Gauss-Jordan elimination.</li>
        <li>Format the output as a matrix.</li>
        <li>Display the output matrix.</li>
      </ul>
      <p>
        Following the steps above, the code of the Gauss-Jordan elimination
        Calculator is created:
      </p>
      <p id='code'>
        {`
                const [matrix, setMatrix] = useState('');`}
        <br />
        {`
                const [solution, setSolution] = useState('');`}
        <br />
        <br />
        {`
                
                const handleSubmit = (event) => {`}
        <br />
        &emsp;
        {`
                    event.preventDefault();`}
        <br />
        <br />
        &emsp;
        {`

                    // Parse the input matrix`}
        <br />
        &emsp;
        {`
                    const lines = matrix.trim().split('\n');`}
        <br />
        &emsp;
        {`
                    const n = lines.length;`}
        <br />
        &emsp;
        {`
                    const a = lines.map((line) =>`}
        <br />
        &emsp;
        {`
                    line`}
        <br />
        &emsp;&emsp;
        {`
                        .trim()`}
        <br />
        &emsp;&emsp;
        {`
                        .split(/`}
        \s{`+/)`}
        <br />
        &emsp;&emsp;
        {`
                        .map((value) => parseFloat(value))`}
        <br />
        &emsp;
        {`
                    );`}
        <br />
        <br />
        &emsp;
        {`

                    // Perform Gauss-Jordan elimination`}
        <br />
        &emsp;
        {`
                    for (let i = 0; i < n; i++) {`}
        <br />
        &emsp;&emsp;
        {`
                        // Find pivot row and swap`}
        <br />
        &emsp;&emsp;
        {`
                        let max = i;`}
        <br />
        &emsp;&emsp;
        {`
                        for (let j = i + 1; j < n; j++) {`}
        <br />
        &emsp;&emsp;&emsp;
        {`
                            if (Math.abs(a[j][i]) > Math.abs(a[max][i])) {`}
        <br />
        &emsp;&emsp;&emsp;&emsp;
        {`
                                max = j;`}
        <br />
        &emsp;&emsp;&emsp;
        {`
                            }`}
        <br />
        &emsp;&emsp;
        {`
                        }`}
        <br />
        &emsp;&emsp;
        {`
                        [a[i], a[max]] = [a[max], a[i]];`}
        <br />
        <br />
        &emsp;&emsp;
        {`

                        // Make pivot element 1`}
        <br />
        &emsp;&emsp;
        {`
                        const pivot = a[i][i];`}
        <br />
        &emsp;&emsp;
        {`
                        for (let j = i; j <= n; j++) {`}
        <br />
        &emsp;&emsp;&emsp;
        {`
                            a[i][j] /= pivot;`}
        <br />
        &emsp;&emsp;
        {`
                        }`}
        <br />
        <br />
        &emsp;&emsp;
        {`

                        // Eliminate all other entries in this column`}
        <br />
        &emsp;&emsp;
        {`
                        for (let j = 0; j < n; j++) {`}
        <br />
        &emsp;&emsp;&emsp;
        {`
                            if (j !== i) {`}
        <br />
        &emsp;&emsp;&emsp;&emsp;
        {`
                                const factor = a[j][i];`}
        <br />
        &emsp;&emsp;&emsp;&emsp;
        {`
                                for (let k = i; k <= n; k++) {`}
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;
        {`
                                    a[j][k] -= factor * a[i][k];`}
        <br />
        &emsp;&emsp;&emsp;&emsp;
        {`
                                }`}
        <br />
        &emsp;&emsp;&emsp;
        {`
                            }`}
        <br />
        &emsp;&emsp;
        {`
                        }`}
        <br />
        &emsp;
        {`
                    }`}
        <br />
        <br />
        &emsp;
        {`

                    // Format the output as an array of rows and columns`}
        <br />
        &emsp;
        {`
                    const tableData = a.map((row) => [...row.slice(0, n), row[n]]);`}
        <br />
        &emsp;
        {`
                    const column = Array.from({ length: n }, (_, i) => 'x'$'{i + 1}');`}
        <br />
        &emsp;
        {`
                    const columns = column.concat(['b']);`}
        <br />
        <br />
        &emsp;
        {`

                    setSolution({`}
        <br />
        &emsp;
        {`
                    tableData,`}
        <br />
        &emsp;
        {`
                    columns,`}
        <br />
        &emsp;
        {`
                    });`}
        <br />
        {`
                };`}
        <br />
      </p>
      <br />
      <Typography variant='h4'>Code Overview</Typography>
      <Typography variant='body1'>
        The code for the Gauss-Jordan elimination calculator utilizes React and
        Material-UI. Here's a brief overview of the code:
      </Typography>

      <List component='ol'>
        <ListItem>
          <ListItemText primary='1.) The useState hook from React is used to manage the state of the input matrix and the solution.' />
        </ListItem>
        <ListItem>
          <ListItemText primary='2.) The handleSubmit function is triggered when the user submits the form containing the input matrix. It prevents the default form submission behavior and performs the Gauss-Jordan elimination algorithm.' />
        </ListItem>
        <ListItem>
          <ListItemText primary='3.) Within handleSubmit, the input matrix is parsed by splitting the string representation of the matrix into rows and extracting the numeric values. The parsed matrix is stored in the a array.' />
        </ListItem>
        <ListItem>
          <ListItemText primary='4.) The Gauss-Jordan elimination algorithm is then applied to the parsed matrix. It iterates through the rows and performs row operations to eliminate variables and obtain the RREF.' />
        </ListItem>
        <ListItem>
          <ListItemText primary='5.) After the algorithm completes, the resulting matrix, a, is formatted as tableData where each row contains the coefficients and the constant. The column names, columns, are generated based on the number of variables in the system.' />
        </ListItem>
        <ListItem>
          <ListItemText primary="6.) The formatted solution, including tableData and columns, is set in the component's state using the setSolution function." />
        </ListItem>
        <ListItem>
          <ListItemText primary='7.) The component renders a form where the user can enter the input matrix. Upon submission, the handleSubmit function is called.' />
        </ListItem>
        <ListItem>
          <ListItemText primary='8.) The solution is displayed as a matrix in the render output.' />
        </ListItem>
      </List>
    </section>
  );
};

export default Specification;
