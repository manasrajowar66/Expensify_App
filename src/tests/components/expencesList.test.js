import React from 'react';
import { ExpenceList } from '../../components/expenceList';
import { shallow } from 'enzyme';
import expences from '../data';

test('should render enpencelist with expences',()=>{
    const wrraper = shallow(<ExpenceList expences={expences}/>);
    expect(wrraper).toMatchSnapshot(); 
});

test('should render expence list with no expences',()=>{
    const wrraper = shallow(<ExpenceList expences={[]}/>);
    expect(wrraper).toMatchSnapshot();
});

