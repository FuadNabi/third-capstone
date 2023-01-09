import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/Categories';

const reducers = combineReducers({
  categoriesReducer,
});

const store = configureStore(
  { reducer: reducers },
  applyMiddleware(logger, thunk),
);

export default store;
