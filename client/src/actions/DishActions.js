import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://localhost:7000/dish/getall'

export const getDishes = createAsyncThunk(
    '/dish/getall',
    async (filterParams) => {
        let queryUrl = baseUrl
        const queryString = {}
        if (filterParams.state.length) {
            queryString.state = filterParams.state
        }
        if (filterParams.flavor_profile.length) {
            queryString.flavor_profile = filterParams.flavor_profile
        }
        if (filterParams.diet.length) {
            queryString.diet = filterParams.diet
        }
        if (filterParams.searchString.length > 3) {
            const regex = new RegExp(`/${filterParams.searchString}/`, 'i')
            queryUrl = `${baseUrl}?name=${filterParams.searchString}`
        }

        const result = await axios.post(`${queryUrl}`, filterParams, { params: { ...queryString } })
        return result.data
    })