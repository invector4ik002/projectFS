import React from 'react';
import { Form } from './components/form';
import { UserList } from './components/userList';
import { initialStateType  } from './redux/usersReduser';

type StateProps = {
   hide: boolean,
   users: initialStateType
}
export const App: React.FC<StateProps> = ({ hide, users }) => {
// console.log('App.tsx',hide)
   return (
      <>
         {hide && <Form />}
         <UserList users={users} />
      </>
   );
}
