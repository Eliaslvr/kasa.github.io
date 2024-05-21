import React from 'react';
import Image from '../../assets/Images/kasa_footer.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Image} alt='Logo' />
            <p>2020 Kasa. All <span className='footerSpan'>rights reserved</span></p>
        </div>
    );
};

export default Footer;