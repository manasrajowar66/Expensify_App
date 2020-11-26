/* eslint-disable no-unused-vars */
import React from 'react';
import { removeExpence } from '../actions/expences';
import { Link } from 'react-router-dom';
import EditExpensifyPage from './editExpensifyPage';
const ExpenceListItem = ({describtion,amount,createdAt,id}) =>(
    <div>
        <Link className="link-decoration" to={`/edit/${id}`}><h2>{describtion}</h2></Link>
        {amount} - {createdAt}
    </div>
);

export default ExpenceListItem;