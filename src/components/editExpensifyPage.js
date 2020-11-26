import React from 'react';
import { connect } from 'react-redux';
import { editExpence } from '../actions/expences';
import { removeExpence } from '../actions/expences';
import ExpenceForm from './expenceForm';

export class EditExpensifyPage extends React.Component{
    onSubmit = (expence)=>{
        this.props.editExpence(expence.id,expence);
        this.props.history.push('/');
    }
    onClick = (expence)=>{
        this.props.removeExpence(expence.id);
        this.props.history.push('/');
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
        editExpence:(id,expence)=> dispatch(editExpence(id,expence)),
        removeExpence:(id)=> dispatch(removeExpence(id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensifyPage);