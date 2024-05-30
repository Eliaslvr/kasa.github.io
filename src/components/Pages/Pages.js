import React from 'react';
import elementJson from '../../element.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Carrousel from '../Carrousel/Carrousel';

const Pages = () => {

    const [rotation, setRotation] = useState(false);

    const handleClick = function (e) {
        e.preventDefault()
        setRotation(!rotation);
    }

    const [rotation2, setRotation2] = useState(false);

    const handleClick2 = function (e) {
        e.preventDefault()
        setRotation2(!rotation2);
    }

    const getId = (id) => {
        return elementJson.find((element) => element.id === id);
    }

    const { id } = useParams();
    const element = getId(id);

    ///////////// Etoiles
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
        <div>
            <Carrousel />

            <div key={id} className='information'>
                <div className='nameElement'>
                    <p className='nameHome'>
                        {element.title}
                    </p>
                    <p className='localisation'>
                        {element.location}
                    </p>
                    <div className='flex'>
                        {element.tags.map((elem, index) => (
                            <div key={index} className={`background`}>
                                <p>{elem}</p>
                            </div> 
                        ))}
                    </div>
                </div>
                <div className='informationPerson'>
                    <div className='person'>
                        <p className='namePerson'>{element.host.name}</p>
                        <img className='pictureProfil' src={element.host.picture} alt='Profil' />
                    </div>
                    <p className='icone'>
                        {generateStars(element.rating)}
                    </p>
                </div>
            </div>
            <div className='info'>
                <div className='width'>
                    <div>
                    {/* Si rotation est vrai, la classe rotate est ajoutée. Sinon, aucune classe supplémentaire n'est ajoutée. */}
                        <p className="nameDescription margin_top_mobile"><span>Description</span><i className={`fas fa-chevron-up ${rotation ? 'rotate' : 'rotate2'}`} onClick={handleClick}></i></p>
                    </div>
                    {/* si count est vrai, alors ajoute le paragraphe... */}
                    {rotation && (<p className='infoDescription'>{element.description}</p>)}
                </div>
                <div className='width'>
                    <div>
                        <p className='nameDescription'><span>Equipement</span><i className={`fas fa-chevron-up ${rotation2 ? 'rotate' : 'rotate2'}`} onClick={handleClick2}></i></p>
                    </div>
                    {rotation2 && (<div className='infoDescription'>{element.equipments.map((elem, index) => (
                                <div key={index}>
                                    <p>{elem}</p>
                                </div> 
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pages;
