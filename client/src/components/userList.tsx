import React, { useCallback, useEffect, useState } from 'react'; 
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { UserItem } from './userItem';
import { hidenForm } from '../redux/action';
import { useHttp } from '../hooks/http.hook';

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

type usersType = {
   name: string,
   surname: string,
   email: string
}

type StateProps = {
   hide: boolean,
   users: usersType[]
}

export const UserList: React.FC<StateProps> = ({ hide }) => {
   console.log(hide)
   const {request} = useHttp();
   const classes = useStyles();
   const dispatch = useDispatch();
   const [users, setUsers] = useState([]);

   const openedHandler = useCallback(() => {
      dispatch(hidenForm(true))
   },[dispatch])

   const fetchPosts = useCallback( async () => {
      try {
         const fetched = await request('/api/get', 'GET', null, {})
         console.log('userList:', fetched)
         setUsers(fetched)
      } catch(err){

      }

   }, [request])

   useEffect(() => {

      fetchPosts()
      return () => {}
   },[fetchPosts, hide])

   return (
      <Grid container spacing={3} >
         {/* arr.length &&  */}
         <UserItem users={users}/>
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

// const mapStateToProps = (state: AppStateType) => {
   
//    return {
//       hides: state.hiden.hiden
//    }
// }

// export default connect(mapStateToProps, null)(UserList);