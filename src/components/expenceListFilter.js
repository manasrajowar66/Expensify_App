import React from 'react';
import { setTextFilter , sortByAmount , sortByDate , setEndDate , setStartDate } from '../actions/filters';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

class ExpenceListFilter extends React.Component{
    state={
        focusedInput:null
    }
    onDatesChange = ({startDate,endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (focusedInput) =>{
        this.setState(()=>({focusedInput}));
    }
    render(){
        return(
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                   <input className="text-input" type='text' placeholder="Search expenses" value={this.props.filters.text} onChange={(e)=>{
                   this.props.dispatch(setTextFilter(e.target.value));
                   }}/>
                </div>

                <div className="input-group__item">
                   <select
                   className="select"
                   value={this.props.filters.sortBy} 
                   onChange={(e)=>{
                   const val = e.target.value;
                   if(val === 'date')
                   this.props.dispatch(sortByDate());
                   else
                   this.props.dispatch(sortByAmount());
                   }}>
                   <option value='date'>Date</option>
                   <option value='amount'>Amount</option>
                   </select>
                </div>

                <div className="input-group__item">
                   <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
                </div>
            </div>
            
            
           
    
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        filters:state.filters
    };
}
export default connect(mapStateToProps)(ExpenceListFilter);