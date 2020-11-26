import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/initialize';




export default class ExpenceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            describtion:props.expence ? props.expence.describtion : '',
            note:props.expence ? props.expence.note : '',
            amount:props.expence ? (props.expence.amount/100).toString() : '',
            createdAt:props.expence ? moment(props.expence.createdAt) : moment(),
            calenderFocused:false,
            error:''
        } 
    }
    onDescribtionChange = (e)=>{
       const describtion = e.target.value;
       this.setState(()=>({describtion }));
    }
    onNotechange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }
    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}));
    }
    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(() =>({createdAt}));
    }
    onFocusChange = ({focused})=> {
      this.setState(()=>({ calenderFocused:focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.describtion || !this.state.amount)
        {
            this.setState(()=>({error:'Please provide describtion and amount'}));
        }
        else
        {
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                describtion:this.state.describtion,
                amount:parseFloat(this.state.amount,10)*100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
        }


    }
    render(){
        return (
            <div>
                
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>

                    <input 
                    name='describtion'
                    type='text' 
                    placeholder='Describtion' 
                    autoFocus
                    value={this.state.describtion} 
                    onChange={this.onDescribtionChange}
                    />

                    <input 
                    name='amount'
                    type='text' 
                    placeholder='Amount'
                    value={this.state.amount} 
                    onChange={this.onAmountChange} 
                    />
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea 
                    name='note'
                    placeholder='Please add a note for this expence' 
                    value={this.state.note} 
                    onChange={this.onNotechange}
                    />

                    <button>Add Expence</button>

                </form>
            </div>
        );
    }
}