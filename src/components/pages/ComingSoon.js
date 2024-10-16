import '../../App.css';
import React from 'react';
import Footer from '../Footer';
import { Button } from '../Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../ComingSoon.css';
function ComingSoon() {
    return (
        <>
            <title>Coming Soon! | SiteHart
            </title>
            <div className='coming-soon-container'>
                <video src="../Images/Space.mp4" className='space-background' autoPlay loop muted />
                <div className='coming-soon-content'>
                    <img src="../Images/favicon.png"></img>
                    <h1>Coming Soon!</h1>
                    <p>Whoops! It looks like you've found a page that isn't quite finished yet. Don't worry, it should be available soon! Check back later!</p>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='/Home' scrollToTop={true}>Cick Here to Return Home<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Button>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default ComingSoon;