import React from 'react';
import ExpenceListItem from './expenceListItem';
import getVisibleExpenes from '../store/visibleExpences';
import { connect } from 'react-redux';

export const ExpenceList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expences.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses avalable</span>
        </div>
      ) : (
        <div>
          {props.expences.map((expence) => {
            return <ExpenceListItem key={expence.id} {...expence} />;
          })}
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = (state)=>{
    return {
        expences:getVisibleExpenes(state.expences,state.filters)
    };
}
export default connect(mapStateToProps)(ExpenceList);