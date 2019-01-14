/* global window */
import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
import locationReducer from './reducers/locationReducer';

const enhancer = () => {
  // eslint-disable-next-line no-underscore-dangle
  return (process.env.NODE_ENV === 'development') && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
};

const reducers = combineReducers({
  root: rootReducer,
  location: locationReducer,
});

const store = createStore(reducers, enhancer());

export default store;
