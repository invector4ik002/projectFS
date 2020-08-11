import React from 'react';
import { Form } from './components/form';
import { UserList } from './components/userList';
import { initialStateType  } from './redux/usersReduser';

// type usersType = {
//    name: string,
//    surname: string,
//    email: string
// }

type StateProps = {
   hide: boolean,
   users: initialStateType
}

export const App: React.FC<StateProps> = ({ hide, users }) => {
   // console.log(hide)
   return (
      <>
      {/* hide={ hide } user={user} */}
         {hide && <Form />}
         <UserList hide={ hide } users={users}/>
      </>
   );
}
