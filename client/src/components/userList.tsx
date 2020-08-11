import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { UserItem } from './userItem';
import { hidenForm } from '../redux/action';
import { AppStateType } from '../redux/rootReduser';
import { initialStateType  } from '../redux/usersReduser';

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

type StateProps = {
   hide: boolean,
   users: initialStateType
}

export const UserList: React.FC<StateProps> = ({ hide }) => {

   const classes = useStyles();

   const dispatch = useDispatch();
   const users = useSelector((state: AppStateType) => state.users.users)

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
