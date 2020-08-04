import React from 'react';
import { Form } from './components/form';
import { UserList } from './components/userList';
import { useDispatch } from 'react-redux';
import { hidenForm } from './redux/action';

type StateProps = {
   hide: boolean,
   hidenForm: () => any
}

export const App: React.FC<StateProps> = ({hide}) => {

   const dispatch = useDispatch()

   const closeHandler = () => {
      dispatch(hidenForm(false))
      console.log(hide)
   };

   return (
      <>
         {hide && <Form closeHandler={closeHandler}/>}
         <UserList />
      </>
   );
}

