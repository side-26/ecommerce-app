import { combineReducers } from "redux";
import { OrderReducer } from "./reducer.orders";
import { reducer } from "./reducer.products";
import {modalReducer} from './showeModalReducer'
import {countReducer} from './cunstomerOrder'
export const redusers=combineReducers({
    orders:OrderReducer,
    products:reducer,
    modalBool:modalReducer,
    customerCount:countReducer
})