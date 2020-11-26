import React from 'react';
import { connect } from 'react-redux';
import { addExpence } from '../actions/expences';
import ExpenceForm from './expenceForm';

export class CreateExpensifyPage extends React.Component{
    onSubmit = (expence)=>{
        this.props.addExpence(expence);
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
            <h1>Add Expence</h1>
            <ExpenceForm 
                onSubmit={this.onSubmit}
            />
            </div>
        )
    }
};



const mapDispatchToProps = (dispatch) => {
    return {
        addExpence:(expence)=> dispatch(addExpence(expence))
    };
}

export default connect(undefined,mapDispatchToProps)(CreateExpensifyPage);