import { connect } from 'react-redux';

import { AppStateType } from '../redux/rootReduser';
import { App } from '../App'

const mapStateToProps = (state: AppStateType) => {
   return {
      hide: state.hiden.hiden,
      form: state.form.form
   }
}

export default connect(mapStateToProps, null)(App);