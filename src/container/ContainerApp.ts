import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { AppStateType } from '../redux/rootReduser';

import { App } from '../App'



const mapStateToProps = (state: AppStateType) => {
   return {
      hide: state.users.hiden
   }
}
// const mapDispatchToProps = (dispatch:any) => {
//    return bindActionCreators({
//       hidenForm
//    }, dispatch);
// }
export default connect(mapStateToProps, null)(App);