import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import './index.css';

import Store from './store'
import { Provider } from 'react-redux'

const storeInstance = Store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
