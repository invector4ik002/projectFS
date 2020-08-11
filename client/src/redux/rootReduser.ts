import { combineReducers } from 'redux';
import { hideFormReduser} from './hidenReduser';
import { getChangeForm } from './formReduser';
import { getDataUsers } from './usersReduser';

export const rootReduser = combineReducers({
   hiden: hideFormReduser,
   form: getChangeForm,
   users: getDataUsers
})
// console.log(users)
type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>;
