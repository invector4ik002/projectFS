import React from 'react';
import { UserItem } from './userItem';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({

//    addUser: {
//       padding: '5px 140px 0px 140px',
//       margin: '60px 0 0 20px',
//       border: 'dashed',
//       borderColor:'rgba(0, 0, 0, 0.12)',
//       borderRadius: '0',
//    },

//    addUserContent: {
//       fontSize: 80,
//       margin: '0 0 0 0',
//       lineHeight: '1',
//       padding: theme.spacing(3),
//       // fontWeight: '400',
//    }
// }));

export const UserList = () => {

   // const classes = useStyles();

   return (
      <>
         <UserItem />
         {/* <Paper className={classes.addUser} >
            <Grid item xs>
               <Typography className={classes.addUserContent} color="textSecondary" gutterBottom>+</Typography>
            </Grid>
         </Paper> */}
      </>
   )
}