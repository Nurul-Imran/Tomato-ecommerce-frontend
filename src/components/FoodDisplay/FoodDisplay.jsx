import React, { useContext } from 'react';

import './FoodDisplay.css';
import { storeContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(storeContext);
    return (
        <section id="food_display">
            <div className="container">
                <div className="food_display_wrapper">
                    <h2>Top dishes near you</h2>
                    <div className="food_display_list">
                        { (food_list.length > 0) ? (
                            food_list.map((item, index) => {
                                if (category === item.category || category === "all"){
                                    return <FoodItem key={index} foodItem={item} />
                                }
                            })
                        ): <h2>Food Item Does Not Here</h2> }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodDisplay