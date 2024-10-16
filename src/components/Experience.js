import React from 'react'
import { Button } from './Buttons'
import '../App.css';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Experience() {

    return (
        <div className='experience-container'>

            <h1>Experience</h1>

            <hr class="solid"></hr>

            <div className="time-line-container">
                <VerticalTimeline lineColor='white'>
                    <VerticalTimelineElement className='vertical-timeline-element-education' iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FontAwesomeIcon icon="fa-solid fa-briefcase" />}>
                        <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                        <p>Sitehart | <span className="vertical-timeline-element-subtitle"><i>Worldwide</i></span></p> 2024 - Present
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-education' iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FontAwesomeIcon icon="fa-solid fa-briefcase" />}>
                        <h3 className="vertical-timeline-element-title">Systems Analyst</h3>
                        <p>Ashley Industrial Molding | <span className="vertical-timeline-element-subtitle"><i>Ashley, Indiana</i></span></p> May, 2022 - Present
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-education' iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FontAwesomeIcon icon="fa-solid fa-graduation-cap" />}>
                        <h3 className="vertical-timeline-element-title">Purdue University Fort Wayne</h3>
                        <p>BS, Information Technology | <span className="vertical-timeline-element-subtitle"><i>GPA 4.00 / 4.00</i></span></p>August, 2020 - May, 2022
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-education' iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FontAwesomeIcon icon="fa-solid fa-graduation-cap" />}>
                        <h3 className="vertical-timeline-element-title">Ivy Tech Community College Fort Wayne</h3>
                        <p>AS, Informatics | <span className="vertical-timeline-element-subtitle"><i>GPA 3.90 / 4.00</i></span></p>August, 2018 - May, 2020
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>



        </div >

    )
}

export default Experience