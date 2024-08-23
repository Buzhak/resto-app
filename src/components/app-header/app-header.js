import './app-header.scss';

import {Link} from 'react-router-dom';
import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { useSelector } from 'react-redux';

const AppHeader = () => {
    const items = useSelector((state) => state.items);
    const totlaPrice = items.reduce((acc, item) => acc + item.price, 0)

    return (
        <header className="header">
            <Link to='/' className="header__link">MENU</Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totlaPrice} $
            </Link>
        </header>
    )
};
 
export default AppHeader;