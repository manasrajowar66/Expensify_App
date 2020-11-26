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
import 'react-dates/lib/css/_datepicker.css';

const store = createStore();


const Jsx = () =>(
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(
    <Jsx />,
  document.getElementById('root')
);





