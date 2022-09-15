import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <a className='logo' href='#'>
          Start Bootstrap
        </a>
        <ul className='nav-links'>
          <li>
            <a className='active' href='#'>
              Home
            </a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
