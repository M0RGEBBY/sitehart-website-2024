import React, { useEffect } from 'react';
import '../App.css';
import './ResumeHero.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './SkillsTable.js';
import SkillsTable from './SkillsTable.js';
import SoftwareTable from './SoftwareTable.js';
import LanguagesTable from './LanguagesTable.js';

function ResumeHero() {
    const softSkillsData = [
        {
            softSkill: 'Customer Service',
            levels: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'],
            progress: 4, // Indicates skill level, where 4 = expert.
        },
        {
            softSkill: 'Critical Thinking',
            levels: ['beginner', 'elementary', 'intermediate', 'advanced', 'expert'],
            progress: 4,
        },
        {
            software: 'Employee Management',
            levels: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'],
            progress: 3, // Indicates skill level, where 4 = expert
        },
        {
            software: 'Analysis',
            levels: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'],
            progress: 3, // Indicates skill level, where 4 = expert
        },
    ];

    return (
        <div className='resume-hero-container'>
            <Parallax pages={6} className='animation'>
                <ParallaxLayer offset={0} speed={0}>
                    <div className='animation_layer parallex' id='bg0'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.9}>
                    <div className='animation_layer parallex' id='bg1'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-1}>
                    <div className='animation_layer parallex' id='bg2'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.8}>
                    <div className='title'>Resume</div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.6}>
                    <div className='animation_layer parallex' id='bg3'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.5}>
                    <div className='animation_layer parallex' id='bg4'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.5}>
                    <div className='animation_layer parallex' id='bg5'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <div className='animation_layer parallex' id='bg6'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <div className='resume-about-section-container'>
                        <div className='about-title-div'>
                            <h1 className='resume-header'>ABOUT</h1>
                            <p className='resume-subheader'>Works in Greater Fort Wayne, Indiana</p>
                        </div>

                        <div className='about-content-container'>
                            <div className='left-div2'><img src="../Images/indiana.png" className='indiana-img'></img></div>
                            <div className='right-column'><div className='portrait-div'><img src="../Images/MorganMug2.png"></img></div></div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0}>
                    <div className='skills-section-container'>
                        <div><h1 className='resume-header'>SOFT SKILLS</h1></div>
                        <SkillsTable></SkillsTable>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0}>
                    <div className='software-section-container'>
                        <div><h1 className='resume-header'>SOFTWARE SKILLS</h1></div>
                        <SoftwareTable></SoftwareTable>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4.0} speed={0}>
                    <div className='language-section-container'>
                        <div><h1 className='language-resume-header'>PROGRAMMING LANGUAGES</h1></div>
                        <LanguagesTable></LanguagesTable>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='p-test' offset={5.0} speed={0} >
                    <div className='language-section-container'>
                        <div><h1 className='language-resume-header'>PROGRAMMING LANGUAGES</h1></div>
                        <LanguagesTable></LanguagesTable>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default ResumeHero;