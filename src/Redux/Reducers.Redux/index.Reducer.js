import { combineReducers } from "redux";
import { OrderReducer } from "./reducer.orders";
import { reducer } from "./reducer.products";

export const redusers=combineReducers({
    orders:OrderReducer,
    products:reducer
})