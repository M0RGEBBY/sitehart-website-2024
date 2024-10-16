import React from 'react'
import Card from './Card'
import { Button } from './Buttons';
import "./WebsiteExamples.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function WebsiteExamples() {
    return (
        <div className="website_examples-container">
            <div className='intro-wrapper'>
                <div className='intro-paragraph2'>
                    <h2>Transform the online precense of your small business with a website designed with heart!</h2>
                    <p>Investing in a website for your business is a fantastic way to engage with your customers in today's digital landscape. A website serves as your business's digital storefront, open 24/7 to showcase your company's offerings to people all across the globe. A professionally designed website from SiteHart not only enhances your brand's credibility but also makes it much easer for customers to find your business and helps your business stand out from the competition.</p>
                    <p>SiteHart offers a variety of different services for those looking to transform their business's online presence. Looking for a website that you yourself can manage and update as you see fit? I offer training services to teach
                        you everything you need to know about keeping your website fresh and up to date. Or maybe you are looking for a more advanced website that you don't want to manage on your own? No problem! I can keep your website update with new content and security updates on an as needed basis.</p>
                    <p>Transform the online presence of your small business with a website designed by SiteHart today!      </p>
                    <div className='button-wrapper'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Request a Quote <FontAwesomeIcon icon="fa-solid fa-arrow-right"></FontAwesomeIcon></Button></div>
                </div>
                <div className='intro-photo-div'>
                    <img className="aim-intro-img" src="../Images/AIM2.png"></img>
                </div>
            </div>
            <h1 className='website-examples-h1'>SiteHart Samples</h1>
            <hr class="solid"></hr>
            <div className='websites-container'>
                <Card imgSrc='../Images/AIM.png' title='Ashley Industrial Molding' link="https://www.ashinmold.com" scrollToTop={true} />
                <Card imgSrc='../Images/comingsoon.png' title='Coming Soon!' link="/coming-soon" scrollToTop={true} />
                <Card imgSrc='../Images/comingsoon.png' title='Coming Soon!' link="/coming-soon" scrollToTop={true} />
                <Card imgSrc='../Images/comingsoon.png' title='Coming Soon!' link="/coming-soon" scrollToTop={true} />
                <Card imgSrc='../Images/comingsoon.png' title='Coming Soon!' link="/coming-soon" scrollToTop={true} />
                <Card imgSrc='../Images/comingsoon.png' title='Coming Soon!' link="/coming-soon" scrollToTop={true} />
            </div>
            <h1 className='website-examples-h1'>Services</h1>
            <hr class="solid"></hr>

            <div className='services-paragraph'>
                <p>At SiteHart, we work alongside our customers from start to finish, every step of the way on all of our web design projects. Questions are always welcome! We believe that the best websites are created as a result of a close collaboration between the client and customer. We offer a wide variety of services depending on the needs of our clientelle. </p>
            </div>
            <div className='services-section'>
                <div className='col'><ul>
                    <li className='service-item'><FontAwesomeIcon icon="fa-brands fa-searchengin"></FontAwesomeIcon>Search Engine Optimization</li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-arrow-up"></FontAwesomeIcon>Site Transfer
                    </li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-dollar-sign"></FontAwesomeIcon>eCommerce Web Design</li>
                </ul></div>
                <div className='col'><ul>
                    <li className='service-item'><FontAwesomeIcon icon="fa-brands fa-wordpress"></FontAwesomeIcon>Wordpress Training</li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-wrench"></FontAwesomeIcon>Ongoing Maintenance
                    </li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-mobile"></FontAwesomeIcon>Responsive Design</li>
                </ul></div>
                <div className='col'><ul>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-globe"></FontAwesomeIcon>Domain Hosting</li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-brands fa-expeditedssl"></FontAwesomeIcon>SSL Certification Support
                    </li>
                    <li className='service-item'><FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Logo Design</li>
                </ul></div>


            </div>

            <div className='services-paragraph'>
                <p>See a service that interests you? Have any questions? Don't hesitate to reach out! </p>
                <div className='button-wrapper2'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Send me a message!<FontAwesomeIcon icon="fa-solid fa-paper-plane"></FontAwesomeIcon></Button></div>
            </div>

        </div>)
}

export default WebsiteExamples