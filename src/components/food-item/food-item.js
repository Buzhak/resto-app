import React, { Component } from "react";

import FoodCard from "./food-card";
import RestoService from '../../services/resto-service'
import {addToCart} from '../../actions';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

const FoodItemWraper = (props) => {
    const {id} = useParams();
    return <FoodItem {...props} id={id}/>;
}

class FoodItem extends Component {
    state = {
        foodItem: {},
        loading: true,
        error: true
    }

    onFoodItemLoaded = (foodItem) => {
        this.setState({
            foodItem,
            loading: false,
            error: false
        })
    }

    onError = (error) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    componentDidMount() {
        const {id} = this.props;
        const restoService = new RestoService();
        restoService.getMenuItem(id)
        .then(this.onFoodItemLoaded)
        .catch(this.onError);
    }

    render() {
        const { foodItem, loading, error } = this.state;
        const { addToCart } = this.props;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error loading food item</div>;
        }
        return (
            <FoodCard foodItem={foodItem} onAddToCart={() => addToCart(foodItem.id)}/>
        )
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(FoodItemWraper);
