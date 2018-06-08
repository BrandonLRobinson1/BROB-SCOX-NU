import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import dummyStore from './dummyStore';
import signUp from './signUp';

const rootReducer = combineReducers({
  signUp,
})

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);