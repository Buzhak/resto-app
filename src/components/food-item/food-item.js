import React, { Component } from "react";

import FoodCard from "./food-card";
import RestoService from '../../services/resto-service'
import { useParams } from "react-router-dom";

const FoodItemWraper = () => {
    const {id} = useParams();

    return <FoodItem id={id}/>;
}

export default FoodItemWraper;

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

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error loading food item</div>;
        }
        
        return (
            <FoodCard foodItem={foodItem}/>
        )
    }
}