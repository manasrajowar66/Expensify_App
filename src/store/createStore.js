/* eslint-disable import/no-anonymous-default-export */
import {createStore , combineReducers} from 'redux';
import expenceReducer from '../reducers/expences';
import filterReducer from '../reducers/filter';

export default () => {
    const store = createStore(
        combineReducers({
            expences:expenceReducer,
            filters:filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

