import React, { useState } from 'react';
import elementJSON from '../../element.json'
import { useParams } from 'react-router-dom';
import Slide from '../Slide/Slide';

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

    return (
        <div className='carousel settings'>
            <div className='carousel-container'>
                <img className='img' src={image[currentSlide]} alt={`Slide ${currentSlide}`} />
            </div>
            <Slide currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} totalSlides={image.length}  />
        </div>
    );
};

export default Carrousel;