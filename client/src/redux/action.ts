import { HIDEN_FORM, GET_CHANGE_FORM } from './types'

export type ActionHideFormType = {
   type: typeof HIDEN_FORM,
   payload: boolean
}

export type ActionGetChangeFormPayloadType = {
   name: string,
   surname: string,
   email: string
}
export type ActionGetChangeFormType = {
   type: typeof GET_CHANGE_FORM,
   payload: ActionGetChangeFormPayloadType
}

export function hidenForm(value: boolean): ActionHideFormType {
   return {
      type: HIDEN_FORM,
      payload: value
   } 
}

export function getChangeForm(name: string, surname: string, email: string): ActionGetChangeFormType {
   return {
      type: GET_CHANGE_FORM,
      payload: { name, surname, email }
   } 
}