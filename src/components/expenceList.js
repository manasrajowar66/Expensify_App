import React from 'react';
import ExpenceListItem from './expenceListItem';
import getVisibleExpenes from '../store/visibleExpences';
import { connect } from 'react-redux';

export const ExpenceList = (props) =>(
    <div>
        {props.expences.length ===0 ? (<p>No expences avalable</p>) :
         (<div>
            <h1>Expence List</h1>
        {props.expences.map((expence)=>{
            return (
                <ExpenceListItem key={expence.id} {...expence}/>
            )
        })}
        </div>) }
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expences:getVisibleExpenes(state.expences,state.filters)
    };
}
export default connect(mapStateToProps)(ExpenceList);