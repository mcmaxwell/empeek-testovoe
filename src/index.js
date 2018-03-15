import './scss/style.scss';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  rootReducer,
  persistedState
)
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('app')
);
