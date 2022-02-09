import { FETCHING_PRODUCTS,FETCHING_SPESEFIC_PRODOCT } from '../Type.actions';

const initialState={products:[],product:""}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {...state,products:[...action.payload]}
    case FETCHING_SPESEFIC_PRODOCT:
      return {...state,product:action.payload}
    default:
      return state
  }
}
// export const personReducer = (state = "", action) => {
//   switch (action.type) {

//       case "UPDATE_PERSON":
//           return [...action.payload];
//       case "SET_PERSON":
//           return action.payload;
//       case "CELEAR_PERSON":
//           return action.payload;
//       default:
//           return state;
//   }
// };