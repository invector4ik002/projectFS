import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface FormProps {
   closeHandler(): void,
}

export const Form: React.FC<FormProps> = ({ closeHandler }) => {
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

   return (
      <div className="wrapper">
      <form className='form-create-users'  noValidate autoComplete="off">
         <p>Создание пользователя</p>
         <TextField className={classes.root} id="name-basic"  label="Имя" variant="outlined"  />
         <TextField className={classes.root} id="surname-basic" label="Фамилия" variant="outlined"  />
         <TextField className={classes.root} id="E-mail-basic" label="E-mail" variant="outlined" error helperText="Необходимо ввести"/>
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