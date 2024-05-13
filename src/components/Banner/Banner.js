import React from 'react';
import image from '../../assets/Images/home-picture-oc.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={image} alt='Banner'/>
            <div className='bannerText'>
                <p>Chez vous, <span className='bannerSpan'>partout et ailleurs</span> </p>
            </div>
        </div>
    );
};

export default Banner;