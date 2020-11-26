/* eslint-disable no-unused-vars */
import React from 'react';
import { removeExpence } from '../actions/expences';
import { Link } from 'react-router-dom';
import EditExpensifyPage from './editExpensifyPage';
import moment from 'moment';
import numeral from 'numeral';
const ExpenceListItem = ({describtion,amount,createdAt,id}) =>(
    <div>
        <Link className="link-decoration" to={`/edit/${id}`}><h2>{describtion}</h2></Link>
        {numeral(amount/100).format('$0,0.00')}
         - 
         {moment(createdAt).format('MMMM Do, YYYY')}
    </div>
);

export default ExpenceListItem;