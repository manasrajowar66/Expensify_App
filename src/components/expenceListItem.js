/* eslint-disable no-unused-vars */
import React from 'react';
import { removeExpence } from '../actions/expences';
import { Link } from 'react-router-dom';
import EditExpensifyPage from './editExpensifyPage';
import moment from 'moment';
import numeral from 'numeral';
const ExpenceListItem = ({describtion,amount,createdAt,id}) =>(
    

        <Link className="link-decoration list-item" to={`/edit/${id}`}>
        <div>
           <h2 className="list-item__title">{describtion}</h2>
           <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
        </Link>

   
);

export default ExpenceListItem;