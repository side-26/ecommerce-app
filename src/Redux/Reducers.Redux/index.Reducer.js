import { combineReducers } from "redux";
import { OrderReducer } from "./reducer.orders";
import { reducer } from "./reducer.products";
import {modalReducer} from './showeModalReducer'
export const redusers=combineReducers({
    orders:OrderReducer,
    products:reducer,
    modalBool:modalReducer
})