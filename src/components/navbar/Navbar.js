// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuItems from './MenuItems';
import './NavbarStyles.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo"><i className="fab fa-react"></i></h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
