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
        let Order=getState().orders.order;
      const response= await order.get(BASE_URL,ID).then( res=>{
          return res
        }
        )
        Order=response;
        dispatch({type:FETCHING_ORDER,payload:Order});
        // products= Get(BASE_URL);
    };
}