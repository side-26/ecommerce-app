import {FETCHING_ORDER,FETCHING_ORDERS} from '../../Type.actions';
<<<<<<< HEAD
import {orders} from '../../../Api/Orders.api'
export const fetchOrdersRequest=(BASE_URL,filtering)=>{
    return async (dispatch,getState)=>{ 
        let Orders=[...getState().orders.orders];
      const responses= await orders.get(BASE_URL,filtering).then( res=>{
=======
import {orders} from '../../../Api/Orders.api';
import {order} from '../../../Api/Order.api'

export const fetchOrdersRequest=(BASE_URL,filterOption)=>{
    return async (dispatch,getState)=>{ 
        let Orders=[...getState().orders.orders];
      const responses= await orders.get(BASE_URL,filterOption).then( res=>{
>>>>>>> 9a112dd1d8ce5070825ba1bb82c7502068e8d9c0
          return res
        }
        )
        Orders=responses;
        dispatch({type:FETCHING_ORDERS,payload:Orders});
        // products= Get(BASE_URL);
    };
}
// export const fetchOrderRequest=(BASE_URL,ID)=>{
//     return async (dispatch,getState)=>{ 
//         let product=getState().product;
//       const response= await Product.get(BASE_URL,ID).then( res=>{
//           return res
//         }
//         )
//         product=response;
//         dispatch({type:FETCHING_ORDER,payload:product});
//         // products= Get(BASE_URL);
//     };
// }