import React, { useState } from 'react';
import image from '../../assets/Images/propos-picture.jpg';

const Propos = () => {

    const [count, setCount] = useState(false)

    const handleClick = function (e) {
        setCount(!count)
    }

    const [count2, setCount2] = useState(false)

    const handleClick2 = function (e) {
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
            <div className='propos'>
                <p>Fiabilité</p>
                {/* Si count est vrai, la classe rotate-icon est ajoutée. Sinon, aucune classe supplémentaire n'est ajoutée. */}
                <i className={`fas fa-chevron-up ${count ? 'rotate' : 'rotate2'}`} onClick={handleClick} />
            </div>
            {/* si count est vrai, alors ajoute le paragraphe... */}
            {count && (<p className='clickPropos'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>)}
        </div>
        <div>
            <div className='propos'>
                <p>Respect</p>
                <i className={`fas fa-chevron-up ${count2 ? 'rotate' : 'rotate2'}`} onClick={handleClick2} />
            </div>
            {count2 && (<p className='clickPropos'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>)}
        </div>
        <div>
            <div className='propos'>
                <p>Service</p>
                <i className={`fas fa-chevron-up ${count3 ? 'rotate' : 'rotate2'}`} onClick={handleClick3} />
            </div>
            {count3 && (<p className={`clickPropos ${count4 ? 'scale-up-ver-top' : ''}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>)}
        </div>
        <div>
            <div className='propos'>
                <p>Résponsabilité</p>
                <i className={`fas fa-chevron-up ${count4 ? 'rotate' : 'rotate2'}`} onClick={handleClick4} />
            </div>
            {count4 && (<p className='clickPropos'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>)}
        </div>
    </div>
    </>
};

export default Propos;