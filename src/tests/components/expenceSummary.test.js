import React from 'react';
import { shallow } from 'enzyme';
import { ExpenceSummary } from '../../components/expenceSummary';

test('should correctly render expence summary',()=>{
    const data = {
        totalCount: 2,
        totalAmount:8039
    }
    const wrraper = shallow(<ExpenceSummary {...data}/>);
    expect(wrraper).toMatchSnapshot();

}) 