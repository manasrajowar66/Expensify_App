/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom';


const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
);

const isAuthenticate = (WrrapedCompponent) =>{
    return (props) =>(
        <div>
            { props.isAuth ? <WrrapedCompponent {...props} /> : <p>please login first!</p> }
        </div>
    )
}

const AdminAuth = isAuthenticate(Info)


ReactDOM.render(
  <React.StrictMode>
    <AdminAuth isAuth={false} info='this is my details' />
  </React.StrictMode>,
  document.getElementById('root')
);