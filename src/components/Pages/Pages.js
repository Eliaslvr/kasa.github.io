import React from 'react';
import elementJson from '../../element.json'
import { useParams } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import CountPage from '../CountPage/CountPage';
import Stars from '../Stars/Stars';

const Pages = () => {

    const getId = (id) => {
        return elementJson.find((element) => element.id === id);
    }

    const { id } = useParams();
    const element = getId(id);

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
                    <Stars rating={element.rating} />
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
