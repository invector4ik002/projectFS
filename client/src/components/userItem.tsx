import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
 
const useStyles = makeStyles((theme) => ({
   paper: {
     display: 'flex',
     flexDirection: 'row',
     padding: theme.spacing(3),
     borderRadius: '0 5px 5px 0'
   },

   wrapper: {
     display: 'flex',
     flexDirection: 'row', 
     margin: '60px 0 0 40px',
     boxShadow: '0 0 10px rgba(0,0,0,0.5)'
   },

   title: {
      fontSize: 12,
   },

   number: {
      fontSize: 36,
      margin: '0 0 0 0',
      padding: '20px 15px 20px 15px',
      background: 'rgba(0, 0, 0, 0.12)',
      borderRadius: '4px 0 0 4px'
   },

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
   },

   awatar: {
      background: '#00acc1',
   }
 }));

 type usersType = {
   name: string,
   surname: string,
   email: string
}

type initialStateTypes = {
   users: usersType[]
}

export const UserItem: React.FC<initialStateTypes> = ({ users }) => {
   
  const classes = useStyles();

   return (
      <>
         {users.map((user, idx) => {
         return (
               <Paper className={classes.wrapper} key={idx}>
                  <Typography className={classes.number} color="textSecondary" gutterBottom>#{idx +1}</Typography>
                  <Paper className={classes.paper}>
                     <Grid container direction="row" wrap="nowrap" spacing={2} >
                        <Grid item>
                        <Avatar className={classes.awatar}>{user.name[0]}{user.surname[0]}</Avatar>
                        </Grid>
                        <Grid item xs>
                           <Typography>{user.name} {user.surname}</Typography>
                           <Typography className={classes.title} color="textSecondary" gutterBottom>{user.email}</Typography>
                        </Grid>
                     </Grid>
                  </Paper>
               </Paper>
            )
         })} 
      </>
   ) 
};