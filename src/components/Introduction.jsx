import * as React from 'react';

const Introduction = () => {
    return (
        <section id="introduction">
            <h1>Introduction</h1>
            <p>
                Gauss-Jordan Elimination is an algorithm that can be used to solve systems of linear equations and to find the inverse of any invertible matrix.
                It is a structured method of solving a system of linear equations. Thus, it is an algorithm and can easily be programmed to solve a system of linear equations.               
            </p>
            <p>The main goal of Gauss-Jordan Elimination is:</p>
            <ul>
                <li>To represent a system of linear equations in an augmented matrix form</li>
                <li>Then performing the 3 row operations on it until the reduced row echelon form (RREF) is achieved</li>
                <li>Lastly, we can easily recognize the solutions from the RREF</li>
            </ul>
            <p>It relies upon three elementary row operations one can use on a matrix:</p>
            <ul>
                <li>Swap the positions of two of the rows</li>
                <li>Multiply one of the rows by a nonzero scalar</li>
                <li>Add or subtract the scalar multiple of one row to another row</li>
            </ul>
        </section>
    );
};

export default Introduction;