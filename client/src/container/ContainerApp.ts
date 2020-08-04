import { connect } from 'react-redux';

import { AppStateType } from '../redux/rootReduser';
import { App } from '../App'

const mapStateToProps = (state: AppStateType) => {
   return {
      hide: state.users.hiden
   }
}

export default connect(mapStateToProps, null)(App);