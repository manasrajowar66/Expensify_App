import React from 'react';
import { connect } from 'react-redux';
import ExpenceList from './expenceList';
import ExpenceListFilter from './expenceListFilter';
import ExpenceSummary from './expenceSummary';

export class ExpensifyDashboardPage extends React.Component{
    
    render(){
        return(
         <div>
            {!!this.props.expences.length && <ExpenceSummary />}
            <ExpenceListFilter />
            <ExpenceList />
         </div>
      ) 
    }
}

const mapStateToProps = (state)=>{
    return{
        expences:state.expences
    }
}
export default connect(mapStateToProps)(ExpensifyDashboardPage);