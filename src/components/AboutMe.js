import React from 'react'
import { Button } from './Buttons'
import '../App.css';
import './AboutMe.css';

function AboutMe() {

    return (
        <div className='about-me-container'>

            <h1>About Me</h1>
            <hr class="solid"></hr>
            <div className="about-me-content-container" >

                <div className="intro-paragraph-container">
                    <p className='intro-paragraph'>Hi there, I'm Morgan, an IT professional currently working as a Business Systems Analyst for Ashley Industrial Molding. I also have experience working
                        in software development and web development using ReactJS and Wordpress. I graduated with my BS in IT from Purdue Fort Wayne
                        in 2022, have worked on a variety of different projects throughout my young career ranging from help desk support to more
                        technical concepts such as BI development and Powershell scripting. I also do free lance web design on the side for small
                        to medium-sized businesses through my startup, SiteHart. This website serves as both an eportfolio to showcase my
                        experience as well as a point of contact for those seeking a sleek, new, custom-made, mobile responsive website for their up
                        and coming business.In my free time, I enjoy going on walks with my beautiful wife, Nicole. I am an avid New York Giants football fan and
                        almost never miss a game on TV. I'm also a huge nerd, so I like to spend time gaming online with friends. I enjoy
                        playing punk rock songs on my guitar whenever I get the chance.</p>
                </div>

                <div className="mugshot-container">
                    <img className="mugshot" src="../Images/MorganMug.png"></img>
                </div>
            </div>
            {/*             <div className='about-me-personal-container'>
                <img className="funny-dino-image" src="../Images/Dino.png"></img>
            </div> */}


        </div>

    )
}

export default AboutMe