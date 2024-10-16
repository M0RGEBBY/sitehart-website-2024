import '../../App.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import AboutSiteHart from '../AboutSiteHart';
import Break from '../Break';
import Testimonials from '../Testimonials';
import Experience from '../Experience';
import TechStackSection from '../TechStackSection';
import ImageSlider from '../ImageSlider';



function Home() {
    return (
        <>
            <title>Homepage | SiteHart
            </title>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Break></Break>
            <AboutSiteHart></AboutSiteHart>
            <Break></Break>
            <Testimonials></Testimonials>
            <Break></Break>
            <Experience></Experience>
            <Break></Break>
            <TechStackSection></TechStackSection>
            <Footer></Footer>
        </>
    )
}

export default Home;