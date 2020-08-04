import React from 'react'; 

import { UserItem } from './userItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { hidenForm } from '../redux/action';

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

export const UserList: React.FC = () => {

   const classes = useStyles();
   const dispatch = useDispatch();

   const openedHandler = () => {
      dispatch(hidenForm(true))
   }

   return (
      <Grid container spacing={3} >
         <UserItem />
         <Paper 
            className={classes.addUser}
            onClick={openedHandler} 
         >
         <Grid item xs>
            <Typography className={classes.addUserContent} color="textSecondary" gutterBottom>+</Typography>
         </Grid>
      </Paper>
      </Grid> 
   )
}