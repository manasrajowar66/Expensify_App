/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';

const PrivateRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
    
})=>(
    <Route {...rest} component={(props)=>(
       isAuthenticate ? (
           <div>
               <Header />
               <Component {...props}/>
           </div>
       ):(
           <Redirect to='/' />
       )
    )}/>
)

const mapStateToProps = (state)=>{
    return {
        isAuthenticate:!!state.auth.uid
    };
};

export default connect(mapStateToProps)(PrivateRoute);