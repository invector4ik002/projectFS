import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
// import { AppStateType } from './redux/rootReduser';

import './index.css';
// import App from './App';

import { rootReduser } from './redux/rootReduser';
import ContainerApp from './container/ContainerApp'

const store = createStore(rootReduser, compose(
// @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider  store = {store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root')
);

