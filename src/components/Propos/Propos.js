import React from 'react';
import image from '../../assets/Images/propos-picture.jpg';
import CountPropos from '../CountPropos/CountPropos';

const Propos = () => {

    return <>
    <div className='image'>
        <img src={image} alt='propos' />
    </div>
    <CountPropos title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
    </CountPropos>
    <CountPropos title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    </CountPropos>
    <CountPropos title="Service">
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    </CountPropos>
    <CountPropos title="Résponsabilité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
    </CountPropos>
    </>
};

export default Propos;