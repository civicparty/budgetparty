import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import App from './components';
import store from './store';
import './index.css';

// Internationalization 🌎
addLocaleData([...en, ...es]);
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

ReactDOM.render(
  <IntlProvider locale={language}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);
