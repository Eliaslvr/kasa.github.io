import React from 'react';

const Start = ({ rating }) => {

    function generateStars(starCount) {
        const maxStars = 5;
        let stars = [];
      
        for (let i = 0; i < maxStars; i++) {
            if (i < starCount) {
                stars.push(<i key={i} className='fas fa-star'></i>); // étoile rouge
            } else {
                stars.push(<i key={i} className='fas fa-star grey'></i>); // étoile grise
            }
        }
      
        return stars;
    }

    return (
        <p className='icone'>
            {generateStars(rating)}
        </p>
    );
};

export default Start;