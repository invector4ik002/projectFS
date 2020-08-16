import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { UserItem } from './userItem';
import { hidenForm, getDataUsers } from '../redux/action';
import { AppStateType } from '../redux/rootReduser';
import { initialStateType  } from '../redux/usersReduser';
// import { hidenForm, getChangeForm,  } from '../redux/action';
import useFetch from '../hooks/useFetch';

const useStyles = makeStyles((theme) => ({

   addUser: {
      padding: '5px 140px 0px 140px',
      margin: '60px 0 0 20px',
      border: 'dashed',
      borderColor:'rgba(0, 0, 0, 0.12)',
      borderRadius: '0',
   },

   addUserContent: {
      fontSize: 80,
      margin: '0 0 0 0',
      lineHeight: '1',
   }
 }));

// type SatePropsAxios = {
//    response: any,
//    isloading: any,
//    error: any
// }

type StateProps = {
   users: initialStateType,
   response: any,
   isloading: any,
   error: any
   doFetch: () => any
   // response: initialStateType
}

export const UserList: React.FC<StateProps> = () => {

   const classes = useStyles();
   const dispatch = useDispatch();
   const users = useSelector((state: AppStateType) => state.users.users);


   const [{response, isloading, error}, doFetch] = useFetch('/api/get')
   console.log('response:', response, 'isloading:' ,isloading, 'error:', error);

   React.useEffect(() => {

      doFetch({
         method:'get',
         data: {
            users:{}
         }
      })
      dispatch(getDataUsers(response))

   });

   const openHandler =  React.useCallback(() => {
      dispatch(hidenForm(true))
   },[dispatch])

   return (
      <Grid container spacing={3} >
         { users.length && <UserItem users={users}/> }
            <Paper 
               className={classes.addUser}
               onClick={openHandler} 
            >
            <Grid item xs>
               <Typography className={classes.addUserContent} color="textSecondary" gutterBottom>+</Typography>
            </Grid>
         </Paper>
      </Grid> 
   )
}
