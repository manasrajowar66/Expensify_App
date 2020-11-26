/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRoute from './routes/AppRoute';
import {addExpence} from './actions/expences';
import createStore from './store/createStore';
import getVisibleState from './store/visibleExpences';
import { setTextFilter }from './actions/filters';
import './styles/styles.scss';

const store = createStore();

store.dispatch(addExpence({describtion:'Water bill',amount:200}));
store.dispatch(addExpence({describtion:'Gas bill',amount:100,createdAt:1000}));
store.dispatch(addExpence({describtion:'Rent',amount:1000,createdAt:10000}));


const Jsx = () =>(
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(
    <Jsx />,
  document.getElementById('root')
);





