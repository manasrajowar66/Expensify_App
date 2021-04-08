import React from 'react';
import getTotalExpences from '../store/getTotalExpences';
import getVisibleExpences from '../store/visibleExpences';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom'

export const ExpenceSummary = ({totalCount , totalAmount})=>{
    const expenceWord = totalCount === 1 ? "expense" : "expenses";
    
    return(
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{totalCount}</span> {expenceWord} totaling <span>{numeral(totalAmount).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
               <Link to="/create" className="button">Add Expense</Link>
            </div>
          </div> 
        </div>
         
    )
}

const mapStateToProps = (state)=>{
    const expences = getVisibleExpences(state.expences,state.filters);
    return {
        totalAmount: getTotalExpences(expences)/100,
        totalCount: expences.length
    };

}

export default connect(mapStateToProps)(ExpenceSummary);