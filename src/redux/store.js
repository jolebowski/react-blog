import { createStore, applyMiddleware, combineReducers } from 'redux';
import articleReducer from './reducers/articleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
