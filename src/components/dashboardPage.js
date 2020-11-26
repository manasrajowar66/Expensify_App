import React from 'react';
import ExpenceList from './expenceList';
import ExpenceListFilter from './expenceListFilter';

const ExpensifyDashboardPage = () =>(
    <div>
        <ExpenceListFilter />
        <ExpenceList />
    </div>
);

export default ExpensifyDashboardPage;