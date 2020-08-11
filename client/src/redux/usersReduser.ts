import { GET_DATA_USERS } from './types';
import { ActionGetDataUsersType } from './action'

type usersType = {
   name: string,
   surname: string,
   email: string
}

export type initialStateType = {
   users: usersType[]
}

const initialState: initialStateType = {
   users: []
}

export const getDataUsers = ( state = initialState, action: ActionGetDataUsersType): initialStateType => {

   switch(action.type) {
      case GET_DATA_USERS:
         return {...state, users: action.payload}
      default: return state
   }
}