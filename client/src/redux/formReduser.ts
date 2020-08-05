import { GET_CHANGE_FORM } from './types';
import { ActionGetChangeFormType } from './action';

type initialStateType = {
   name: string,
   surname: string,
   email: string
}

const initialState: initialStateType = {
   name: '',
   surname: '',
   email: ''
}

export const getChangeForm = ( state = initialState, action: ActionGetChangeFormType): initialStateType => {
   //
   switch(action.type) {
      case GET_CHANGE_FORM:
         return {...state,  name: action.payload}
      default: return state
   }
}