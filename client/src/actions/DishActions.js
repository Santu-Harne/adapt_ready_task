import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://localhost:7000/dish/getall'

export const getDishes = createAsyncThunk(
    '/dish/getall',
    async (filterParams) => {
        const searchString = filterParams.searchString
        let queryUrl = baseUrl
        { searchString.length >= 3 ? (queryUrl = `${baseUrl}?state=${searchString}`) : (queryUrl = baseUrl) }
        console.log(queryUrl);

        const result = await axios.post(`${queryUrl}`, filterParams)
        return result.data
    })