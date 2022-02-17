import {SHOW_EDIT_MODAL,SHOW_INFO_MODAL} from '../../Type.actions';
export const changeModalsState=(val)=>{
    return async (dispatch,getState)=>{ 
        let ModalState=getState().modalBool.infoModal;
        ModalState=val;
       await dispatch({type:SHOW_INFO_MODAL,payload:ModalState});
        // products= Get(BASE_URL);
    };
}
export const changeEditModalState=(val)=>{
    return async (dispatch,getState)=>{ 
        let ModalState=getState().modalBool.editModal;
        ModalState=val;
       await dispatch({type:SHOW_EDIT_MODAL,payload:ModalState});
    };
}
