import { GET_CHANGE_FORM } from './types';
 
const initialState = {
   form: {}
}

export const getChangeForm = ( state = initialState, action: any) => {

   switch(action.type) {
      case GET_CHANGE_FORM:
         return {...state, form: action.payload}
      default: return state
   }
}