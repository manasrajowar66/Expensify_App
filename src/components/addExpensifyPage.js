import React from 'react';
import { connect } from 'react-redux';
import { startAddExpence} from '../actions/expences';
import ExpenceForm from './expenceForm';

export class CreateExpensifyPage extends React.Component{
    onSubmit = (expence)=>{
        this.props.startAddExpence(expence);
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
        startAddExpence:(expence)=> dispatch(startAddExpence(expence))
    };
}

export default connect(undefined,mapDispatchToProps)(CreateExpensifyPage);