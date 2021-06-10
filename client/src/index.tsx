import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('body')
);
