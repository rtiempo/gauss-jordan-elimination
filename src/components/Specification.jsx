import * as React from 'react';

const Specification = () => {
    return (
        <section id="specification">
            <h1>Specification</h1>
            <h3>About the method</h3>
            <p>To solve a system of linear equations using Gauss-Jordan elimination you need to do the following steps:</p>
            <ul>
                <li>To represent a system of linear equations in an augmented matrix form</li>
                <li>Then performing the 3 row operations on it until the reduced row echelon form (RREF) is achieved</li>
                <li>Lastly, we can easily recognize the solutions from the RREF</li>
            </ul>
            <h3>About the program</h3>
            <p>In solving a system of linear equations using Gauss-Jordan elimination the following steps are done:</p>
            <ul>
                <li>Accept an input.</li>
                <li>Parse the input matrix.</li>
                <li>Perform Gauss-Jordan elimination.</li>
                <li>Format the output as a matrix.</li>
                <li>Display the output matrix.</li>
            </ul>
            <p>Following the steps above, the code of the Gauss-Jordan elimination Calculator is created:</p>
            <p id="code">
                {`
                const [matrix, setMatrix] = useState('');`}<br />{`
                const [solution, setSolution] = useState('');`}<br /><br />{`
                
                const handleSubmit = (event) => {`}<br />&emsp;{`
                    event.preventDefault();`}<br /><br />&emsp;{`

                    // Parse the input matrix`}<br />&emsp;{`
                    const lines = matrix.trim().split('\n');`}<br />&emsp;{`
                    const n = lines.length;`}<br />&emsp;{`
                    const a = lines.map((line) =>`}<br />&emsp;{`
                    line`}<br />&emsp;&emsp;{`
                        .trim()`}<br />&emsp;&emsp;{`
                        .split(/\s+/)`}<br />&emsp;&emsp;{`
                        .map((value) => parseFloat(value))`}<br />&emsp;{`
                    );`}<br /><br />&emsp;{`

                    // Perform Gauss-Jordan elimination`}<br />&emsp;{`
                    for (let i = 0; i < n; i++) {`}<br />&emsp;&emsp;{`
                        // Find pivot row and swap`}<br />&emsp;&emsp;{`
                        let max = i;`}<br />&emsp;&emsp;{`
                        for (let j = i + 1; j < n; j++) {`}<br />&emsp;&emsp;&emsp;{`
                            if (Math.abs(a[j][i]) > Math.abs(a[max][i])) {`}<br />&emsp;&emsp;&emsp;&emsp;{`
                                max = j;`}<br />&emsp;&emsp;&emsp;{`
                            }`}<br />&emsp;&emsp;{`
                        }`}<br />&emsp;&emsp;{`
                        [a[i], a[max]] = [a[max], a[i]];`}<br /><br />&emsp;&emsp;{`

                        // Make pivot element 1`}<br />&emsp;&emsp;{`
                        const pivot = a[i][i];`}<br />&emsp;&emsp;{`
                        for (let j = i; j <= n; j++) {`}<br />&emsp;&emsp;&emsp;{`
                            a[i][j] /= pivot;`}<br />&emsp;&emsp;{`
                        }`}<br /><br />&emsp;&emsp;{`

                        // Eliminate all other entries in this column`}<br />&emsp;&emsp;{`
                        for (let j = 0; j < n; j++) {`}<br />&emsp;&emsp;&emsp;{`
                            if (j !== i) {`}<br />&emsp;&emsp;&emsp;&emsp;{`
                                const factor = a[j][i];`}<br />&emsp;&emsp;&emsp;&emsp;{`
                                for (let k = i; k <= n; k++) {`}<br />&emsp;&emsp;&emsp;&emsp;&emsp;{`
                                    a[j][k] -= factor * a[i][k];`}<br />&emsp;&emsp;&emsp;&emsp;{`
                                }`}<br />&emsp;&emsp;&emsp;{`
                            }`}<br />&emsp;&emsp;{`
                        }`}<br />&emsp;{`
                    }`}<br /><br />&emsp;{`

                    // Format the output as an array of rows and columns`}<br />&emsp;{`
                    const tableData = a.map((row) => [...row.slice(0, n), row[n]]);`}<br />&emsp;{`
                    const column = Array.from({ length: n }, (_, i) => 'x'$'{i + 1}');`}<br />&emsp;{`
                    const columns = column.concat(['b']);`}<br /><br />&emsp;{`

                    setSolution({`}<br />&emsp;{`
                    tableData,`}<br />&emsp;{`
                    columns,`}<br />&emsp;{`
                    });`}<br />{`
                };`}<br />
            </p>
        </section> 
    );
};

export default Specification;