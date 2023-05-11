import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <h1>Gauss-Jordan Elimination</h1>
            <ul>
                <CustomLink to="/">Introduction</CustomLink>
                <CustomLink to="/Calculator">Program</CustomLink>
                <CustomLink to="/Specification">Specification</CustomLink>
                <CustomLink to="/Conclusion">Conclusion</CustomLink>
            </ul>
        </header>
    );
};

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
};

export default Header;