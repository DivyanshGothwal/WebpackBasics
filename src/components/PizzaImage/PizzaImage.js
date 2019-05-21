import React from 'react';
import classes from './PizzaImage.css';
import pizzaImagejpg from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
    return (
        <div className="pizzaImage">
            <img src={pizzaImagejpg} className={classes.pizzaImage}/>
        </div>
    )
}


export default PizzaImage;