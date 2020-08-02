import { HIDEN_FORM } from './types'

export type ActionHideFormType = {
   type: typeof HIDEN_FORM,
   payload: boolean
}

export function hidenForm(value: boolean): ActionHideFormType {
   return {
      type: HIDEN_FORM,
      payload: value
   } 
}