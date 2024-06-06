import React from 'react';

function Slide({ setCurrentSlide, totalSlides }) {


    // const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        // % totalSlides s'assure que l'index revient à 0 lorsque la dernière diapositive est atteinte.
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }

    return (
        <div className='carousel-buttons'>
            <i className="carousel-arrow-left fas fa-chevron-left" onClick={goToPrevSlide}></i>
            <i className="carousel-arrow-right fas fa-chevron-right" onClick={goToNextSlide}></i>
        </div>
    );
}

export default Slide;