import { GET_CHANGE_FORM } from './types';
// import { ActionGetChangeFormType } from './action';

// type initialStateType = {
//    form:{
//       name: string,
//       surname: string,
//       email: string
//    } 
// }
//initialStateType 
const initialState = {
   form: {}
}
//: initialStateType
//: ActionGetChangeFormType
export const getChangeForm = ( state = initialState, action:any) => {
   //
   switch(action.type) {
      case GET_CHANGE_FORM:
         return {...state, form: action.payload}
      default: return state
   }
}