import * as React from 'react';

const Introduction = () => {
    return (
        <section id="introduction">
            <h1>Introduction</h1>
            <p>
                Gauss-Jordan Elimination is an algorithm that can be used to solve systems of linear equations and to find the inverse of any invertible matrix.
                It is a structured method of solving a system of linear equations. Thus, it is an algorithm and can easily be programmed to solve a system of linear equations.               
            </p>
            <p>
                Gauss-Jordan elimination is a fundamental technique in linear algebra that provides a systematic approach to solving systems of linear equations. 
                It is named after Carl Friedrich Gauss and Wilhelm Jordan because of their notable contributions to the development and refinement of this method. 
                The beauty of Gauss-Jordan elimination lies in the fact that the elementary row operations applied to the augmented matrix do not change the solutions of the original system of equations. 
                Thus, when the reduced row-echelon form is obtained, the solutions can be read directly from the transformed matrix. 
                If the system of equations is consistent, a unique solution or a parameterized solution can be determined. If the system is inconsistent, it indicates that no solution exists. 
                Apart from finding the solutions to systems of linear equations, Gauss-Jordan elimination has broader applications in linear algebra. 
                It is instrumental in determining matrix inverses, calculating the rank and nullity of matrices, investigating linear independence or dependence of vectors, and finding the basis of vector spaces. 
                Its computational efficiency and accuracy make it a valuable tool in various fields, including mathematics, physics, engineering, computer science, and economics.
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