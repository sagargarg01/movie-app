import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// function logger(obj, next , action)
// logegr(obj)(next)(action)

// const logger = function( { dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       // middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
   // middleware code
   if(typeof action !== 'function'){
   console.log('ACTION_TYPE = ', action.type);
   }
   next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // middleware code
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store",store);
// console.log('BEFORE_STATE', store.getState());

ReactDOM.render(
    <App store= {store} />,
  document.getElementById('root')
);



