import './menu-list-item.scss';

import React from 'react';
import iconsFood from '../icons-food';
import { useNavigate } from 'react-router-dom';

const MenuListItem = ({menuItem}) => {
    const {id, title, price, url, category} = menuItem;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/food/${id}`);
    };

    return (
        <>
            <li className="menu__item" onClick={handleClick}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="munuItem"></img>
                <div className="menu__category">Category: <span>{category}</span>{iconsFood(category)}</div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;