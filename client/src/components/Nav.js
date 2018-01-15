import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div>
        <Link to="login">Log In</Link>
      </div>
    </nav>
  )
}

export default Nav;
