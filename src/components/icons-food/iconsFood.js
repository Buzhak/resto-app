import './iconsFood.css'

import React from "react";
import foodIcon from './food.png';
import meatIcon from './meat.png';
import pizzaIcon from './pizza.png';
import saladIcon from './salads.png';

const iconsFood = (category) => {
    switch (category) {
        case 'salads':
            return <img src={saladIcon} alt="salads" className="icon-food"/>;
        case 'meat':
            return <img src={meatIcon} alt="meat" className="icon-food"/>;
        case 'pizza':
            return <img src={pizzaIcon} alt="pizza" className="icon-food"/>;
        default:
            return <img src={foodIcon} alt="food" className="icon-food"/>;
    }       
}

export default iconsFood;