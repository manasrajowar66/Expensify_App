import React from 'react';
import loader from '../styles/images/loader.gif';

const LoadingPage = ()=>(
    <div className="loader">
        <img className="loader__image" src={loader} alt="loader"/>
    </div>
)

export default LoadingPage;