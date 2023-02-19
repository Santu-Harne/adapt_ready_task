import { configureStore } from "@reduxjs/toolkit";
import DishReducer from './reducer/DishReducer'

const myReducer = {
    result: DishReducer
}
const store = configureStore({
    reducer: myReducer,
    devTools: true
})

export default store;