import { HIDEN_FORM, GET_CHANGE_FORM, GET_DATA_USERS } from './types'

export type ActionHideFormType = {
   type: typeof HIDEN_FORM,
   payload: boolean
};
export type ActionGetChangeFormType = {
   type: typeof GET_CHANGE_FORM,
};

export function hidenForm(value: boolean): ActionHideFormType {
   return {
      type: HIDEN_FORM,
      payload: value
   } 
}

export function getChangeForm(form: any) {
   return {
      type: GET_CHANGE_FORM,
      payload: form
   } 
}

type usersType = {
   name: string,
   surname: string,
   email: string
}
export type ActionGetDataUsersType = {
   type: typeof GET_DATA_USERS,
   payload: usersType[]
};
export function getDataUsers(usersData: usersType[]): ActionGetDataUsersType {
   return {
      type: GET_DATA_USERS,
      payload: usersData
   }
}