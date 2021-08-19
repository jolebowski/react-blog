import { createStore, combineReducers, applyMiddleware } from 'redux';
import articleReducer from './reducers/articleReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  articleReducer,
});

const Store = createStore(rootReducers, applyMiddleware(thunk));

export default Store;
