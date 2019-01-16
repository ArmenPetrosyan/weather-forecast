import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from 'Root/reducers/root';
import location from 'Root/reducers/location';
import weather from 'Root/reducers/weather';

const enhancer = () => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(thunk));
  }
  return applyMiddleware(thunk);
};

const reducers = combineReducers({
  root,
  location,
  weather,
});

const store = createStore(reducers, enhancer());

export default store;
