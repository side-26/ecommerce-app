import {FETCHING_ORDER,FETCHING_ORDERS} from '../../Type.actions';
import {orders} from '../../../Api/Orders.api';
import {order} from '../../../Api/Order.api'

export const fetchOrdersRequest=(BASE_URL,filterOption)=>{
    return async (dispatch,getState)=>{ 
        let Orders=[...getState().orders.orders];
      const responses= await orders.get(BASE_URL,filterOption).then( res=>{
          return res
        }
        )
        Orders=responses;
        dispatch({type:FETCHING_ORDERS,payload:Orders});
        // products= Get(BASE_URL);
    };
}
export const fetchOrderRequest=(BASE_URL,ID)=>{
    return async (dispatch,getState)=>{ 
        let product=getState().product;
      const response= await orders.get(BASE_URL,ID).then( res=>{
          return res
        }
        )
        product=response;
        dispatch({type:FETCHING_ORDER,payload:product});
        // products= Get(BASE_URL);
    };
}