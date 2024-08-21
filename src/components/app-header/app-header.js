import './app-header.scss';

import {Link} from 'react-router-dom';
import React from 'react';
import cartIcon from './shopping-cart-solid.svg';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to='/' className="header__link">MENU</Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;