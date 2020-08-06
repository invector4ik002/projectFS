import { combineReducers } from 'redux';
import { hideFormReduser} from './hidenReduser';
import { getChangeForm } from './formReduser';

export const rootReduser = combineReducers({
   hiden: hideFormReduser,
   form: getChangeForm
})
// console.log(users)
type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>;
