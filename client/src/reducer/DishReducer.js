import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "../actions/DishActions";

const initialState = {
    dishes: []
};

const DishReducer = createSlice({
    name: 'dishes',
    initialState,
    extraReducers: {
        [getDishes.fulfilled]: (state, action) => {
            state.dishes = action.payload.data
        }
    }
})

const { reducer } = DishReducer

export default reducer;