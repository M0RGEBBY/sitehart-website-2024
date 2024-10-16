import '../../App.css';
import React from 'react';
import ProjectsHeroSection from '../ProjectsHeroSection'
import MultiFilters from '../MultiFilters';
import Footer from '../Footer';
function Projects() {
    return (
        <>
            <title>Projects | SiteHart
            </title>
            <div className="space-dad">
                <video src="../Images/Space.mp4" className='space-background' autoPlay loop muted />

                <ProjectsHeroSection></ProjectsHeroSection>

                <MultiFilters></MultiFilters>
            </div>        </>
    )
}

export default Projects;