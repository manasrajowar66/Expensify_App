import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should render header correctly',()=>{
    const wrraper = shallow(<Header />);
    expect(wrraper).toMatchSnapshot();
});