import React from 'react'
import { useLocation } from 'react-router-dom'

const DishDetails = () => {
    const location = useLocation()
    const { name, ingredients, flavor_profile, diet, cook_time, state, region, prep_time } = location.state.dish
    return (
        <div>
            <h1>DishDetails</h1>
            <h2>{name}</h2>
            <h2>{ingredients}</h2>
        </div>
    )
}

export default DishDetails