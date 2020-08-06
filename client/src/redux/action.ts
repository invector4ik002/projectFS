import { HIDEN_FORM, GET_CHANGE_FORM } from './types'

export type ActionHideFormType = {
   type: typeof HIDEN_FORM,
   payload: boolean
}

// export type ActionGetChangeFormPayloadType = {
//    form: {
//       name: string,
//       surname: string,
//       email: string
//    }
// }
export type ActionGetChangeFormType = {
   type: typeof GET_CHANGE_FORM,
   // payload: ActionGetChangeFormPayloadType
}

export function hidenForm(value: boolean): ActionHideFormType {
   return {
      type: HIDEN_FORM,
      payload: value
   } 
}
//: ActionGetChangeFormType 
//name: string, surname: string, email: string
export function getChangeForm(form: any){
   return {
      type: GET_CHANGE_FORM,
      payload: form
   } 
}