import React from 'react'
import { Button } from './Buttons'
import '../App.css';
import './AboutSiteHart.css';

function AboutSiteHart() {

    return (
        <div className='dad'>

            <div className='about-sitehart-container'>
                <img className="sitehart-logo" src="../Images/sitehart_logo.png"></img>
                <hr class="solid2"></hr>
                <div className="about-sitehart-content-container">

                    <p className='intro-paragraph'>Are you or someone you know looking for a new website for their business? I can help! I provide affordable, modern website
                        solutions using a variety of different web design technologies through my freelance company, SiteHart! I will work with you to determine what kind of website would work
                        best for you and your unique business needs. Depending on your specific needs and preferences, I also provide Wordpress training
                        that my customers use to keep their website up to date and fresh with new content.
                    </p>


                </div>
                <div className='btn-div'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='/Examples' scrollToTop={true}>Check out some of my previous work!</Button>
                </div>
                <div className='or-div'>
                    <p>Or</p>
                </div>
                <div className='btn-div'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link="/coming-soon" scrollToTop={true}>Request a quote today!</Button>
                </div>
            </div>
        </div>
    )
}

export default AboutSiteHart