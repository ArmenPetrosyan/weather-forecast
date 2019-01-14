import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'Root/reducers/rootReducer';
import locationReducer from 'Root/reducers/locationReducer';
import weatherReducer from 'Root/reducers/weatherReducer';

const enhancer = () => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(thunk));
  }
  return applyMiddleware(thunk);
};

const reducers = combineReducers({
  root: rootReducer,
  location: locationReducer,
  weather: weatherReducer,
});

const store = createStore(reducers, enhancer());

export default store;
