import React from 'react';
import getTotalExpences from '../store/getTotalExpences';
import getVisibleExpences from '../store/visibleExpences';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenceSummary = ({totalCount , totalAmount})=>{
    const expenceWord = totalCount === 1 ? 'expence' : 'expences';
    
    return(
        <p>Viewing {totalCount} {expenceWord} totaling {numeral(totalAmount).format('$0,0.00')}</p> 
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