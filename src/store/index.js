import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {newsReducer} from '../component/news/action/reducer';
import {categoryReducer} from '../component/order/action/reducer';

const rootReducer = combineReducers({
    newsReducer,
    categoryReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
