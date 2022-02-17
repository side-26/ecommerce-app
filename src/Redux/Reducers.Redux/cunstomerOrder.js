import { CALCULATE_NUMBER_OF_PRODUCT } from '../Type.actions';
const initialState = {
    count: 0
}
export const countReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case CALCULATE_NUMBER_OF_PRODUCT:
            return {...state,count:Action.payload};

        default:
            return state;
    }
}