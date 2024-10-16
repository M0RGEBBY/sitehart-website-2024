import React from 'react';
import './Footer.css';
import { Button } from './Buttons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-copyright-text">© 2024 Sitehart</p>
            <div className='footer-icons-container'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='https://www.google.com'><FontAwesomeIcon icon="fa-brands fa-github" /></Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='https://www.linkedin.com/in/morgan-e-gebhart/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Button>
            </div>

        </div>
    );
}

export default Footer;