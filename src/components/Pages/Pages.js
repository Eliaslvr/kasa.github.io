import React from 'react';
import elementJson from '../../element.json'
import { useParams } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import CountPage from '../CountPage/CountPage';

const Pages = () => {

    // const [rotation, setRotation] = useState(false);

    // const handleClick = function () {
    //     // Appelle la fonction setRotation avec la valeur opposée de rotation
    //     setRotation(!rotation);
    // }

    // const [rotation2, setRotation2] = useState(false);

    // const handleClick2 = function () {
    //     setRotation2(!rotation2);
    // }

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
            <div className='bloc'>
            <CountPage title="Description">
                <p>{element.description}</p>
            </CountPage>
            <CountPage className="infoEnd" title="Equipement">
                <p className='infoDescription'>{element.equipments}</p>
            </CountPage>
            </div>
        </div>
    );
};

export default Pages;
