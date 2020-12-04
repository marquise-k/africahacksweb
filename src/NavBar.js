import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/articles-list">Forum</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;