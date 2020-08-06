import React from 'react';
import { Form } from './components/form';
import { UserList } from './components/userList';
import { useDispatch } from 'react-redux';
import { hidenForm, getChangeForm } from './redux/action';

type StateProps = {
   form: any,
   hide: boolean,
   hidenForm: () => any
}

export const App: React.FC<StateProps> = ({hide, form}) => {
console.log(form)
   const dispatch = useDispatch()

   const closeHandler = () => {
      // dispatch(getChangeForm(form))
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

