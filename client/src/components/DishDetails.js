import React from 'react'
import { useLocation } from 'react-router-dom'

const DishDetails = () => {
    const location = useLocation()
    const { name, ingredients, flavor_profile, diet, cook_time, state, region, prep_time } = location.state.dish
    return (
        // Displaying single dish details based on users click
        <div className='container'>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="card dish_details">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="https://www.wellplated.com/wp-content/uploads/2021/01/Chicken-Broccoli-Rice-Casserole-Recipe.jpg" alt="Dish Image" width={400} height={500} />
                            </div>
                            <div className="col-md-7 ">
                                <h1 className='text-info text-decoration-underline my-3'>DishDetails</h1>
                                <table className="table mb-0">
                                    <tbody>
                                        <tr>
                                            <th><h2 >Name</h2></th>
                                            <td><span className='fw-bold'>{name}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Ingredients</h4></th>
                                            <td><span>{ingredients}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Flavor Profile</h4></th>
                                            <td><span>{flavor_profile}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Diet</h4></th>
                                            <td><span>{diet}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Prep Time</h4></th>
                                            <td><span>{prep_time}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Cook Time</h4></th>
                                            <td><span>{cook_time}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>State</h4></th>
                                            <td><span>{state}</span></td>
                                        </tr>
                                        <tr>
                                            <th><h4>Region</h4></th>
                                            <td><span>{region}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishDetails