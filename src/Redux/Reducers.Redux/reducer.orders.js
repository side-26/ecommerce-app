import { FETCHING_ORDER, FETCHING_ORDERS} from '../Type.actions';

const initialState={orders:[],order:""}
export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ORDERS:
      return {...state,orders:[...action.payload]}
    case FETCHING_ORDER:
      return {...state,product:action.payload}
    default:
      return state
  }
}