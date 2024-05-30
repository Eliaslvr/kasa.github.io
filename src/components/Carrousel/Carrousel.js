import React, { useState } from 'react';
import elementJSON from '../../element.json'
import { useParams } from 'react-router-dom';

const Carrousel = () => {

    const getId = (id) => {
        return elementJSON.find((element) => element.id === id);
    }

    // userParams permet d'accéder aux paramètres de l'URL.
    const { id } = useParams();
    const element = getId(id);
    const image = element.pictures.map((image) => 
        image
    )

    // useState sert à gérer et mettre à jour l'état. ca commence à la premiere image
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = image.length;

    const goToNextSlide = () => {
        // % totalSlides s'assure que l'index revient à 0 lorsque la dernière diapositive est atteinte.
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }

    return (
        <div className='carousel settings'>
            <div className='carousel-container'>
                <img className='img' src={image[currentSlide]} alt={`Slide ${currentSlide}`} />
            </div>
            <div className='carousel-buttons'>
                <i className="carousel-arrow-left fas fa-chevron-left" onClick={goToPrevSlide}></i>
                <i className="carousel-arrow-right fas fa-chevron-right" onClick={goToNextSlide}></i>
            </div>
        </div>
    );
};

export default Carrousel;