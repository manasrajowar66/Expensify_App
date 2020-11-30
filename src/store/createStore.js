/* eslint-disable import/no-anonymous-default-export */
import {createStore , combineReducers , applyMiddleware , compose} from 'redux';
import expenceReducer from '../reducers/expences';
import filterReducer from '../reducers/filter';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expences:expenceReducer,
            filters:filterReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}

