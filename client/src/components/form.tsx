import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {getChangeForm} from '../redux/action';
import { useDispatch } from 'react-redux';

export type CloseHandler = {
   closeHandler(): any
}

export const Form: React.FC<CloseHandler> = ({ closeHandler,  }) => {
   const dispatch = useDispatch();
   const useStyles = makeStyles({
      root: {
         margin:'15px 0 0 0',
         width: '100%',
      },
      palette: {
         margin:'30px 0 0 0',
         background: '#00acc1',
         width: '100%',
         fontSize: '8px',
         padding: '10px'
       }
    });
   const classes = useStyles();

   const [form, setForm] = useState({
      name: '',
      surname: '',
      email: ''
   });

   const changeHandler = (event: any) => { 
      setForm({ ...form, [event.target.name]: event.target.value})
      // getChangeForm
      dispatch(getChangeForm(form))
      console.log(form)
   };

   return (
      <div className="wrapper">
      <form className='form-create-users'  noValidate autoComplete="off">
         <p>Создание пользователя</p>
         <TextField 
            className={classes.root} 
            id="name-basic"  label="Имя" 
            variant="outlined"
            name="name" 
            onChange={changeHandler} 
         />
         <TextField 
         className={classes.root} 
            id="surname-basic" 
            label="Фамилия" 
            variant="outlined"
            name="surname" 
            onChange={changeHandler} 
         />
         <TextField 
            className={classes.root} 
            id="E-mail-basic" 
            label="E-mail" 
            variant="outlined" 
            error 
            helperText="Необходимо ввести"
            name="email"
            onChange={changeHandler}
         />
         <Button 
            className={classes.palette} 
            variant="contained" 
            color="primary"
            onClick={closeHandler}
         >Создать
         </Button>
      </form>
    </div>
   )
};