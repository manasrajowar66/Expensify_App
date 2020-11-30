/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
    
})=>(
    <Route {...rest} component={(props)=>(
       isAuthenticate ? (
        <Redirect to='/dashboard' />
       ):(
           
           <div>
               <Component {...props}/>
           </div>
       )
    )}/>
)

const mapStateToProps = (state)=>{
    return {
        isAuthenticate:!!state.auth.uid
    };
};

export default connect(mapStateToProps)(PublicRoute);