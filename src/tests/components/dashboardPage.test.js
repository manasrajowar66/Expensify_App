import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyDashboardPage } from '../../components/dashboardPage';
import expences from '../data';

test('should render expence dashboard page',()=>{
    const wrraper = shallow(<ExpensifyDashboardPage expences={expences}/>);
    expect(wrraper).toMatchSnapshot();
})