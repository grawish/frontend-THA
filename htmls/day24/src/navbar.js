import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/dashboard'>
          <li>Dashboard</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;