import {CALCULATE_NUMBER_OF_PRODUCT} from '../../Type.actions'
export const calculateCounter=(Val)=>{
    return async (dispatch,getState)=>{ 
        let Count=getState().customerCount.count;
        if(Count<0)
            dispatch({type:CALCULATE_NUMBER_OF_PRODUCT,payload:0});
        else
            dispatch({type:CALCULATE_NUMBER_OF_PRODUCT,payload:Count+Val});
            
        // products= Get(BASE_URL);
    };
}