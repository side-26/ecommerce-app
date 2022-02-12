import { SHOW_EDIT_MODAL,SHOW_INFO_MODAL} from '../Type.actions';

const initialState={editModal:"",infoModal:""}
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EDIT_MODAL:
      return {editModal:action.payload,...state}
    case SHOW_INFO_MODAL:
      return {...state,infoModal:action.payload}
    default:
      return state
  }
}