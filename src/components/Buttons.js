import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link,
    scrollToTop,
    downloadUrl
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleDownload = () => {
        if (downloadUrl) {
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = downloadUrl.split('/').pop(); // Extract the filename
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <Link to={link} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={() => {
                    if (scrollToTop) {
                        handleScrollToTop();
                    }
                    if (onClick) {
                        onClick();
                    }

                    if (downloadUrl) {
                        handleDownload();
                    }
                }}
                type={type}
            >
                {children}
            </button>
        </Link>
    )

};


