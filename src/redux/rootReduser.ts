import { combineReducers } from 'redux';
import { hideFormReduser } from './searchReduser';

export const rootReduser = combineReducers({
   users: hideFormReduser,
})
// console.log(users)
type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>;
