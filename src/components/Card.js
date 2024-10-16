import React from 'react'
import './Card.css';
const Card = ({ imgSrc,
    title, link, scrollToTop }) => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (



        <div className='card-container'>
            <a href={link}><div className='test'>
                <img src={imgSrc} className='card-image' />
                <h2 className='card-title'>{title}</h2>
            </div>
            </a>
        </div>



    )
}

export default Card
