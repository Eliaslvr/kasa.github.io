import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Images from '../../assets/Images/kasa.jpg';



function Navbar() {

    const location = useLocation();

    return (
        <div className='navbar'>
            <NavLink to='/'>
                <div>
                    <img src={Images} alt='Logo' />
                </div>
            </NavLink>
            <div className='navbarChoice'>
            {/* Si la condition est vraie (location.pathname === '/'), alors la classe 'active' est ajoutée aux classes déjà existantes. sinon, une chaîne vide ('') est ajoutée */}
                <NavLink to='/' className={`navbarLink ${location.pathname === '/' ? 'line' : ''}`}>Accueil</NavLink>
                <NavLink to='/propos' className={`navbarLink ${location.pathname === '/propos' ? 'line' : ''}`}>A propos</NavLink>
            </div>
        </div>
    );
}

export default Navbar;