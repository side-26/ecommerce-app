
import {FETCHING_PRODUCTS,FETCHING_SPESEFIC_PRODOCT} from '../../Type.actions';
import {Get,GetProduct} from '../../../Api/Products.api';
export const fetchProductsRequest=(BASE_URL)=>{
    return async (dispatch,getState)=>{ 
        let products=[...getState().products];
      const responses= await Get(BASE_URL).then( res=>{
          return res
        }
        )
        products=responses;
        dispatch({type:FETCHING_PRODUCTS,payload:products});
        // products= Get(BASE_URL);
    };
}
export const fetchProductRequest=(BASE_URL,ID)=>{
    return async (dispatch,getState)=>{ 
        let product=[...getState().product];
      const response= await GetProduct(BASE_URL,ID).then( res=>{
          return res
        }
        )
        product=response;
        dispatch({type:FETCHING_SPESEFIC_PRODOCT,payload:product});
        // products= Get(BASE_URL);
    };
}
// export const SetPerson = (evt) => {
//     return async (dispatch) => {
//         const person = evt;
//         await dispatch({ type: "SET_PERSON", payload: person })
//     }
// }
