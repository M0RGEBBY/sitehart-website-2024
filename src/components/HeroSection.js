import React from 'react'
import { Button } from './Buttons'
import './HeroSection.css';
import '../App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HeroSection() {

    const [text] = useTypewriter({
        words: ["An Interactive ePortfolio", "A Freelance Web Design Company"], loop: {}, typeSpeed: 50, deleteSpeed: 50,
    });
    return (
        <div className='hero-container'>
            <video src="../Images/SiteHart.mp4" autoPlay loop muted />
            <h1>Welcome to SiteHart</h1>
            <p className='author'>by Morgan Gebhart</p>
            <p><span class="auto-type">{text}</span>
                <span>
                    <Cursor style='|' /></span></p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='/Resume' scrollToTop={true}>Learn More About Me</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='/Examples' scrollToTop={true}>Learn More About SiteHart <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" /></Button>

            </div>
        </div>
    )
}

export default HeroSection