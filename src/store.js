/* global window */
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const enhancer = () => {
  console.log('enhancer');
  // eslint-disable-next-line no-underscore-dangle
  return (process.env.NODE_ENV === 'development') && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
};

const store = createStore(rootReducer, enhancer());
console.log(process.env.NODE_ENV);

export default store;