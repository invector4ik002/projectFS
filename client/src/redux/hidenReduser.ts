import { HIDEN_FORM } from './types';
import { ActionHideFormType } from './action'

export type initialStateType = {
   hiden: boolean
}

const initialState: initialStateType = {
   hiden: true
}

export const hideFormReduser = ( state = initialState, action: ActionHideFormType): initialStateType => {
   //
   switch(action.type) {
      case HIDEN_FORM:
         return {...state, hiden: action.payload}
      default: return state
   }
}