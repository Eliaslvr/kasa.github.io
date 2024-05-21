import React, { useState } from 'react';
import image from '../../assets/Images/propos-picture.jpg';

const Propos = () => {

    const [count, setCount] = useState(false)

    const handleClick = function (e) {
        // e.preventDefault()
        setCount(!count)
    }

    const [count2, setCount2] = useState(false)

    const handleClick2 = function (e) {
        //e.preventDefault()
        setCount2(!count2)
    }

    const [count3, setCount3] = useState(false)

    const handleClick3 = function (e) {
        setCount3(!count3)
    }

    const [count4, setCount4] = useState(false)

    const handleClick4 = function (e) {
        e.preventDefault()
        setCount4(!count4)
    }

    return <>
    <div className='image'>
        <img src={image} alt='propos' />
    </div>
    <div className='affiche'>
        <div>
            <div onClick={handleClick} className={`propos ${count ? 'rotate-icon' : ''} ${count ? 'scale-up-ver-top' : ''}`}>
                <p>Fiabilité</p>
                <i className="fas fa-chevron-up" />
            </div>
            {count && (<p className='clickPropos'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>)}
        </div>
        <div>
            <div onClick={handleClick2} className={`propos ${count2 ? 'rotate-icon' : ''} ${count2 ? 'scale-up-ver-top' : ''}`}>
                <p>Respect</p>
                <i className="fas fa-chevron-up" />
            </div>
            {count2 && (<p className='clickPropos'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>)}
        </div>
        <div>
            <div onClick={handleClick3} className={`propos ${count3 ? 'rotate-icon' : ''}`}>
                <p>Service</p>
                <i className="fas fa-chevron-up" />
            </div>
            {count3 && (<p className={`clickPropos ${count4 ? 'scale-up-ver-top' : ''}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>)}
        </div>
        <div>
            <div onClick={handleClick4} className={`propos ${count4 ? 'rotate-icon' : ''} `}>
                <p>Résponsabilité</p>
                <i className="fas fa-chevron-up" />
            </div>
            {count4 && (<p className='clickPropos'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>)}
        </div>
    </div>
    </>
};

export default Propos;