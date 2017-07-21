import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import './index.css';

import Store from './store'
import { Provider } from 'react-redux'
import InitialState from './config/InitialState';
const storeInstance = Store(InitialState);
debugger

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
