import React from 'react';
import { connect } from 'react-redux';
import { startEditExpence } from '../actions/expences';
import { startRemoveExpence } from '../actions/expences';
import ExpenceForm from './expenceForm';

export class EditExpensifyPage extends React.Component{
    onSubmit = (expence)=>{
        this.props.startEditExpence(this.props.expence.id,expence);
        this.props.history.push('/dashboard');
    }
    onClick = (expence)=>{
        this.props.startRemoveExpence(expence.id);
        this.props.history.push('/dashboard');
    }
    render(){
        return (
            <div>
             <ExpenceForm 
                expence={this.props.expence}
                onSubmit={this.onSubmit}
             />
             <button onClick={()=>{
                 this.onClick(this.props.expence);
             }}>remove</button>
            </div>
        );
    }
}



const mapStateToProps = (state,props) =>{
    return{
        expence:state.expences.find((expence)=>{
            return expence.id === props.match.params.id;
        })
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startEditExpence:(id,expence)=> dispatch(startEditExpence(id,expence)),
        startRemoveExpence:(id)=> dispatch(startRemoveExpence(id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensifyPage);