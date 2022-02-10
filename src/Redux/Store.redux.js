import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { redusers } from './Reducers.Redux/index.Reducer';


export const store = createStore(
    redusers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);