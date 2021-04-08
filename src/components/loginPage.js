import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

export const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1>Expensify</h1>
      <p>It's the time to control your expenses.</p>
      <button className="button" onClick={props.startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogin: ()=> dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage);