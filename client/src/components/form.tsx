import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { hidenForm, getChangeForm} from '../redux/action';
import { useHttp } from '../hooks/http.hook';

export const Form: React.FC = () => {
   const dispatch = useDispatch();
   
   const theme = createMuiTheme({
      overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "1em",
            color: "#fff",
            backgroundColor: "#00acc1"
          }
        }
      }
    });

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
   const {request} = useHttp();

   const [form, setForm] = useState({ name: '', surname: '', email: '' });
   const [visibleForm, setVisibleForm] = useState(false);
   // const [users, setUsers] = useState([]);

   const changeHandler = (event: any) => { 
      setForm({ ...form, [event.target.name]: event.target.value})
   };

   const createHandler = React.useCallback( async () => {
      try {
         const data = await request('/api/user/create', 'POST', {...form})
         console.log(data)
      } catch(e) {}
   },[request, form]);

   // const fetchPosts = React.useCallback( async () => {
   //    try {
   //       const fetched = await request('/api/get', 'GET', null, {})
   //       setUsers(fetched)
   //    } catch(err){

   //    }

   // }, [request])

   const handleTooltipClose = () => {
      setVisibleForm(false);
    };

   const closeHandler  = () => {
      if ( form.email === '') {
         setVisibleForm(true);
         return
      }
      createHandler()
      dispatch(hidenForm(false))
      dispatch(getChangeForm(form))
   };

   React.useEffect(() => {
      console.log('Компонент отабражен')
      
      return () => {
         console.log('Компонент был размонтирован')
      }
   },[])

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
            autoFocus
            helperText="Необходимо ввести"
            name="email"
            onChange={changeHandler}
         />
         <MuiThemeProvider theme={theme}>
         <Tooltip
            PopperProps={{
               disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={visibleForm}
            title="Необходимо заполнить поля"
         >
            <Button 
               className={classes.palette} 
               variant="contained" 
               color="primary"
               onClick={closeHandler}
            >Создать
            </Button>
         </Tooltip>
         </MuiThemeProvider>
      </form>
    </div>
   )
};