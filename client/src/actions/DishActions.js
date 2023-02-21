import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const getDishes = createAsyncThunk(
    '/dish/getall',
    async (filterParams) => {

        // based on filter value creating parameter object
        const queryString = {}
        queryString.sort = filterParams.sort
        if (filterParams.state.length) {
            queryString.state = filterParams.state
        }
        if (filterParams.flavor_profile.length) {
            queryString.flavor_profile = filterParams.flavor_profile
        }
        if (filterParams.diet.length) {
            queryString.diet = filterParams.diet
        }
        if (filterParams.searchString.length >= 3) {
            queryString.searchString = filterParams.searchString
        }


        // calling api using axios.post method
        const result = await axios.post(`http://localhost:7000/dish/getall`, queryString)
        return result.data
    })

export const login = createAsyncThunk(
    '/dish/login',
    async (userCred) => {
        const result = await axios.post('http://localhost:7000/dish/login', userCred)
        return result.data
    })