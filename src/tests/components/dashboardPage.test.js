import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboardPage from '../../components/dashboardPage';

test('should render expence dashboard page',()=>{
    const wrraper = shallow(<ExpensifyDashboardPage />);
    expect(wrraper).toMatchSnapshot();
})