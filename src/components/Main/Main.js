import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import element from '../../element.json'

function Main() {
    return (
        <div>
            <Banner />
            <div className='appartement'>
                {element.map(appartements => {
                    return(
                        <Link to={`/pages/${appartements.id}`}>
                        <div className='box' key={appartements.id}>
                            <img src={ appartements.cover} alt={ appartements.title }/>
                            <p className='textBox'>{ appartements.title }</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Main;