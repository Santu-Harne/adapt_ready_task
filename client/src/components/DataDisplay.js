import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getDishes } from '../actions/DishActions'


function DataDisplay(props) {
    const dispatch = useDispatch();
    const { itemCount } = props
    const [startOff, setStartOff] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [curItem, setCurItem] = useState([])

    const [filterParams, setFilterParams] = useState({
        state: [],
        flavor_profile: [],
        diet: [],
        searchString: '',
        sort: {
            name: 1
        }
    })

    const dishes = useSelector(state => state.result.dishes)

    const filterChange = async (name, value) => {
        if (filterParams[name].includes(value)) {
            const arr = [...filterParams[name]]
            let index = arr.indexOf(value)
            if (index >= 0) {
                function deleteElement(arr) {
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                    return arr;
                }
                setFilterParams({ ...filterParams, [name]: deleteElement(arr) })
            }
        }
        else {
            setFilterParams({ ...filterParams, [name]: [...filterParams[name], value] })
        }
    }

    const searchChange = async (e) => {
        e.preventDefault()
        const { value } = e.target
        setFilterParams({ ...filterParams, searchString: value })
        if (filterParams.searchString.length > 3) {
            dispatch(getDishes(filterParams))
        }
    }

    const apply_handler = (e) => {
        e.preventDefault();
        dispatch(getDishes(filterParams))
        setFilterParams({ ...filterParams, searchString: '' })
    }

    const sortChange = () => {
        const value = filterParams.sort.name
        setFilterParams(prevState => ({ ...prevState, sort: { ...prevState.sort, name: (value * -1) } }))
    }

    useEffect(() => {
        dispatch(getDishes(filterParams))
    }, [filterParams.sort, filterParams.searchString])

    return (
        <div className='m-3'>
            <div className="row">
                <div className="col-12">
                    <div className="card p-3 mb-2">
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3>Dish Details</h3>
                            <div className='d-flex'>
                                <input type="text" onChange={searchChange} value={filterParams.searchString} name="dish" id="dish" className='search_field form-control me-2' list='dish_list' />
                                <datalist id='dish_list'>
                                    {dishes && dishes.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name}>{item.name}</option>
                                        )
                                    })}
                                </datalist>
                                <div className="btn-group me-2">
                                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        State
                                    </button>
                                    <ul className="dropdown-menu">
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Karnataka' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Karnataka
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Goa' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Goa
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Odisha' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Odisha
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Bihar' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Bihar
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Punjab' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Punjab
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Uttar Pradesh' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Uttar Pradesh
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Jammu & Kashmir' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Jammu Kashmir
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Kerala' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Kerala
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Tamil Nadu' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Tamil Nadu
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Maharashtra' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Maharashtra
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Gujarat' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Gujarat
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Assam' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Assam
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Tripura' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Tripura
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="state" id="state" value='Andhra Pradesh' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Andhra Pradesh
                                            </label>
                                        </div>
                                    </ul>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        Flavor
                                    </button>
                                    <ul className="dropdown-menu">
                                        <div className='form-check'>
                                            <input type="checkbox" name="flavor_profile" id="flavor_profile" value='sweet' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Sweet</label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="flavor_profile" id="flavor_profile" value='spicy' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Spicy</label>
                                        </div>
                                    </ul>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Diet</button>
                                    <ul className="dropdown-menu">
                                        <div className='form-check'>
                                            <input type="checkbox" name="diet" id="diet" value='vegetarian' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Vegetarian</label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="checkbox" name="diet" id="diet" value='non vegetarian' className='me-1' onChange={(e) => filterChange(e.target.name, e.target.value)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Non Vegetarian</label>
                                        </div>
                                    </ul>
                                </div>
                                <button className='btn btn-sm btn-success' onClick={apply_handler}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <table className="table table-striped dish_table">
                                <thead>
                                    <tr>
                                        <th>Name <span className='float-end sort_click' onClick={() => sortChange()}><i className={filterParams.sort.name === -1 ? 'bi bi-caret-down-fill' : 'bi bi-caret-up-fill'}></i></span></th>
                                        <th>Ingredients</th>
                                        <th>Diet</th>
                                        <th>Prep_Time</th>
                                        <th>Cook_Time</th>
                                        <th>Flavor_Profile</th>
                                        <th>Course</th>
                                        <th>State</th>
                                        <th>Region</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dishes && dishes.map((item, index) => {
                                        return (
                                            <tr key={index} className='align-items-center'>
                                                <td><NavLink to={'/dishdetails'} className='text-decoration-none' state={{ dish: item }} >{item.name} <i className="bi bi-box-arrow-up-right"></i></NavLink></td>
                                                <td>{item.ingredients}</td>
                                                <td>{item.diet}</td>
                                                <td>{item.prep_time}</td>
                                                <td>{item.cook_time}</td>
                                                <td>{item.flavor_profile}</td>
                                                <td>{item.course}</td>
                                                <td>{item.state}</td>
                                                <td>{item.region}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataDisplay