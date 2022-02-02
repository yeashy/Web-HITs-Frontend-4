import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import newsReducer from './newsReducer'
import todoReducer from './todoReducer';

let reducers = combineReducers({
    newsSection: newsReducer,
    todoSection: todoReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;