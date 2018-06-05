import { createStore, combineReducers, applyMiddleWare, compose } from 'redux';
import thunk from 'redux-thunk';
import dummyStore from './dummyStore';

const rootReducer = combineReducers({
  dummyStore,
})

export const store = createStore(
  rootReducer,
  compose(applyMiddleWare(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);