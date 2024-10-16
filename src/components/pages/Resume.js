import '../../App.css';
import ResumeHero from '../ResumeHero';
import Footer from '../Footer';
import '../../Resume.css';
import React, { useEffect, useRef } from 'react';
import SkillsTable from '../SkillsTable';
import SoftwareTable from '../SoftwareTable';
import LanguagesTable from '../LanguagesTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Buttons';

function Resume() {
    const bg0Ref = useRef(null);
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);
    const bg4Ref = useRef(null);
    const bg5Ref = useRef(null);
    const bg6Ref = useRef(null);
    const heroTitleRef = useRef(null);


    const skillsBg0Ref = useRef(null);
    const skillsBg1Ref = useRef(null);
    const skillsBg2Ref = useRef(null);
    const skillsBg3Ref = useRef(null);
    const skillsBg4Ref = useRef(null);



    const windowRef = useRef(null);

    useEffect(() => {
        windowRef.current = window;

        const handleScroll = () => {
            const winScroll = windowRef.current.scrollY;
            const bg0Element = bg0Ref.current;
            const bg1Element = bg1Ref.current;
            const bg2Element = bg2Ref.current;
            const bg3Element = bg3Ref.current;
            const bg4Element = bg4Ref.current;
            const bg5Element = bg5Ref.current;
            const bg6Element = bg6Ref.current;
            const heroTitleElement = heroTitleRef.current;


            // Calculate the desired translation based on the scroll position
            const translationY0 = winScroll / 0 // Adjust the divisor as needed (SKY)
            const translationY1 = winScroll / 0.9; // Adjust the divisor for a different parallax speed (PINK HILLS)
            const translationY2 = winScroll / 1; // Adjust the divisor for a different parallax speed (MOUNTAIN)
            const translationY3 = winScroll / 0.8; // Adjust the divisor for a different parallax speed (BEAR HILL)

            const translationY4 = winScroll / 0.6; // Adjust the divisor for a different parallax speed (front Purple Tree)

            const translationY5 = winScroll / 0.8; // Adjust the divisor for a different parallax speed (Wiz Tower)

            const translationY6 = winScroll / 0; // Adjust the divisor for a different parallax speed (Grass)

            const translationHeroTitle = winScroll / 0.8; // Adjust the divisor for parallax speed




            bg0Element.style.transform = `translateY(${translationY0}px)`;
            bg1Element.style.transform = `translateY(${translationY1}px)`;
            bg2Element.style.transform = `translateY(${translationY2}px)`;
            bg3Element.style.transform = `translateY(${translationY3}px)`;
            bg4Element.style.transform = `translateY(${translationY4}px)`;
            bg5Element.style.transform = `translateY(${translationY5}px)`;
            bg6Element.style.transform = `translateY(${translationY6}px)`;
            heroTitleElement.style.transform = `translateY(${translationHeroTitle}px) translateX(-50%)`; // Combine translations


        };

        windowRef.current.addEventListener('scroll', handleScroll);

        return () => {
            windowRef.current.removeEventListener('scroll', handleScroll);

        };
    }, []);
    return (
        <>
            <title>Resume | SiteHart
            </title>
            <div className="resume-container">
                <div className="para-container">
                    <div className="bg0" ref={bg0Ref}></div>
                    <div className="bg1" ref={bg1Ref}></div>
                    <div className="bg2" ref={bg2Ref}></div>
                    <div className="bg3" ref={bg3Ref}></div>
                    <div className="bg4" ref={bg4Ref}></div>
                    <div className="bg5" ref={bg5Ref}></div>
                    <div className="bg6" ref={bg6Ref}></div>
                    <div className="hero-title-div" ref={heroTitleRef}><h1 className='hero-title'>RESUME</h1></div>

                </div>

                <div className='resume-about-section-container'>
                    <div className='about-title-div'>
                        <h1 className='resume-header'>ABOUT</h1>
                        <p className='resume-subheader'>Works in Greater Fort Wayne, Indiana</p>
                    </div>

                    <div className='about-resume-content-container'>
                        <div className='indiana-div'><img src="../Images/indiana.png" className='indiana-img'></img></div>
                        <div className='portrait-div'><img src="../Images/MorganMug2.png"></img></div>
                    </div>

                    <div className='skills-section-container'>

                        <SkillsTable></SkillsTable>
                    </div>

                    <div className='software-section-container'>
                        <SoftwareTable></SoftwareTable>
                    </div>

                    <div className='language-section-container'>

                        <LanguagesTable></LanguagesTable>
                    </div>

                    <div className='experience-section-container'><h1 className='resume-header'>EXPERIENCE</h1>
                        <div className='experience-stop1-container'>
                            <div className='experience-stop1-content'>
                                <img src='.\Images\magicwandicon.png' className='magic-wand-icon'></img>
                                <div className='mobile-icon'><img src='.\Images\magicwandicon.png' className='magic-wand-icon-mobile'></img></div>
                                <h1 className='stop1-date'>May 2016 - September 2022</h1>
                                <h1 className='stop1-company'>Magic Wand Restaurant</h1>
                                <p className='stop1-descrip'>Responsible for updating company website and for managing shifts. Managing shifts included overseeing a small team of 12-15 people and cashier balancing at the end of each shift. </p>
                            </div>
                        </div>
                        <div className='experience-stop2-container'>
                            <div className='experience-stop2-content' >
                                <img src='.\Images\aimicon.png' className='aim-icon'></img>
                                <div className='mobile-icon'><img src='.\Images\aimicon.png' className='aim-icon-mobile'></img></div>


                                <h1 className='stop2-date'>May 2022 - Present</h1>
                                <h1 className='stop2-company'>Ashley Industrial Molding</h1>
                                <p className='stop2-descrip'>Work as part of a small team responsible for overseeing and maintaining all IT infrastructure. Developed a SharePoint Online solution to streamline production processes and improve access to relevant documentation and KPIs.
                                    Leveraged Microsoft Power Automate in combination with SharePoint Online to detect production anomalies and notify the appropriate personnel.Created dashboards and reports from data stored in the company’s ERP system using Angles Professional BI Tool.
                                </p>
                            </div>
                        </div>
                        <div className='experience-stop3-container'>
                            <div className='experience-stop3-content'>
                                <img src='.\Images\siteharticon.png' className='sitehart-icon'></img>
                                <div className='mobile-icon'><img src='.\Images\siteharticon.png' className='sitehart-icon-mobile'></img></div>


                                <h1 className='stop3-date'>2024 - Present</h1>
                                <h1 className='stop3-company'>SITEHART</h1>
                                <p className='stop3-descrip'>Sitehart is my own freelance web design company. I create websites for customers using modern web technologies like Wordpress CMS and ReactJS. Developed web applications (like the one you are viewing right now!)using the ReactJS framework in combination with CSS, HTML5, and other web design tehcnologies.</p>
                            </div>
                        </div>


                    </div>
                    <h1 className='resume-header'>EDUCATION</h1>
                    <div className='education-container'>
                        <div className='edu-stop1-container'>
                            <img src='.\Images\ivytech.png'></img>
                            <div className='edu1-row1'>
                                <h1 className='edu-name1'>Ivy Tech Community College</h1>
                                <p className='edu-location1'><FontAwesomeIcon icon="fa-solid fa-location-dot" /> Fort Wayne, IN</p>
                            </div>

                            <div className='edu1-row2'>
                                <p className='edu-date1'> August 2018 - May 2020  <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></p>
                                <p className='edu-degree1'> <FontAwesomeIcon icon="fa-solid fa-scroll" /> AS in Informatics</p>
                            </div>
                            <p className='edu-GPA1'><FontAwesomeIcon icon="fa-solid fa-calculator" /> GPA: 3.9/4.0</p>



                        </div>
                        <div className='edu-stop1-container'>
                            <img src='.\Images\pfw.png'></img>
                            <div className='edu1-row1'>
                                <h1 className='edu-name1'>Purdue University - Fort Wayne</h1>
                                <p className='edu-location1'><FontAwesomeIcon icon="fa-solid fa-location-dot" /> Fort Wayne, IN</p>
                            </div>

                            <div className='edu1-row2'>
                                <p className='edu-date1'> August 2020 - May 2022  <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></p>
                                <p className='edu-degree1'> <FontAwesomeIcon icon="fa-solid fa-scroll" /> BS in Information Technology</p>
                            </div>
                            <p className='edu-GPA1'><FontAwesomeIcon icon="fa-solid fa-calculator" /> GPA: 4.0/4.0</p>



                        </div>
                    </div>
                    <div className='resume-download-section'>

                        <div className='download-button'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' downloadUrl='/Files/Morgan Gebhart Resume 2024.docx'><FontAwesomeIcon icon="fa-solid fa-download" /> Download a copy of my resume (.docx)</Button></div>
                        <div className='return-button'>
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' scrollToTop={true}>
                                Return to the top <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                            </Button>
                        </div>
                    </div>
                </div>

                <Footer></Footer>

            </div>


        </>
    )
}

export default Resume;