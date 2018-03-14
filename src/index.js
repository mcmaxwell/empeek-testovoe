import './scss/style.scss';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('app')
);
