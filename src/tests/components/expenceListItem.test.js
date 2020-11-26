import React from 'react';
import  ExpenceListItem  from '../../components/expenceListItem';
import { shallow } from 'enzyme';
import expences from '../data';

test('should render expence item',()=>{
    const wrraper = shallow(<ExpenceListItem {...expences[0]}/>);
    expect(wrraper).toMatchSnapshot();
});