/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRoute, { history } from './routes/AppRoute';
import { addExpence, startSetExpence } from './actions/expences';
import createStore from './store/createStore';
import getVisibleState from './store/visibleExpences';
import { login, logout } from './actions/auth';
import LoadingPage from './components/loadingPage';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = createStore();


const Jsx = () =>(
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

let hasRender = false;
const renderApp = ()=>{
    if(!hasRender){
        ReactDOM.render(<Jsx />,
            document.getElementById('root')
        );
        hasRender= true;
    }
}

ReactDOM.render(<LoadingPage />,document.getElementById('root'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        console.log('login');
        store.dispatch(startSetExpence()).then(()=>{
        renderApp();
        if(history.location.pathname === '/')
        history.push('/dashboard');
        });
        
    }
    else{
        store.dispatch(logout());
        console.log('logout');
        renderApp();
        history.push('/');
    }
})



