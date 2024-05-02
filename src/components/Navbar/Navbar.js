import React from 'react';
import { NavLink } from 'react-router-dom';
import Images from '../../assets/Images/kasa.jpg'

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink>
                <div>
                    <img src={Images} alt='Logo' />
                </div>
            </NavLink>
            <div className='navbarChoice'>
                <NavLink to='/' className='navbarLink'>Accueil</NavLink>
                <NavLink to='/propos' className='navbarLink'>A propos</NavLink>
            </div>
        </div>
    );
}

export default Navbar;