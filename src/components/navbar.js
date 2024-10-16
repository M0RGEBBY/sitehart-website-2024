import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './navbar.css';
import { Button } from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  const isResumePage = location.pathname === '/resume';

  const navbarClasses = `navbar ${isResumePage ? 'nonsticky-navbar' : ''}`;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);



  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={navbarClasses}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="../Images/sitehart_logo.png" alt="logo" class="navbar-logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? "fa-times" : "fa-bars"} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { closeMobileMenu(); scrollToTop(); }} >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/examples'
                className='nav-links'
                onClick={() => { closeMobileMenu(); scrollToTop(); }}
              >
                Examples
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={() => { closeMobileMenu(); scrollToTop(); }}
              >
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/resume'
                className='nav-links'
                onClick={() => { closeMobileMenu(); scrollToTop(); }}
              >
                Resume
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>Request a Quote</Button>}
        </div>
      </nav >
    </>
  );
}

export default Navbar;

