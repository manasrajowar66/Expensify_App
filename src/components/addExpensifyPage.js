import React from 'react';
import { connect } from 'react-redux';
import { startAddExpence} from '../actions/expences';
import ExpenceForm from './expenceForm';

export class CreateExpensifyPage extends React.Component{
    onSubmit = (expence)=>{
        this.props.startAddExpence(expence);
        this.props.history.push('/dashboard');
    }
    render(){
        return(
            <div>

            <div className="page-header">
               <div className="content-container">
                  <h1 className="page-header__title">Add Expense</h1>
               </div>
            </div>

            <div className="content-container">
              <ExpenceForm 
                onSubmit={this.onSubmit}
              />
            </div>
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