import './food-card.scss'

import React from "react";

const FoodCard = ({foodItem, onAddToCart}) => {
    const {title, price, url, category} = foodItem;
    
    return (
        <div className="card">
            <div className="card__body">
                <img className='card__img' src={url} alt="food-img"/>
                <div className='card__description-box'>
                    <div className='card__description'>
                        <p className='card__title'>{title}</p>
                        <p className='card__category'>Category: <span>{category}</span></p>
                        <p className='card__price'>Price: <span>{price} $</span></p>
                    </div>
                    <button className="card__btn" onClick={() => onAddToCart()}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;