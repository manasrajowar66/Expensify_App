import React from 'react';
import { shallow } from 'enzyme';
import ExpenceForm from '../../components/expenceForm';
import expences from '../data';
import moment from 'moment';

test('should render expence from with no data',()=>{
    const wrraper = shallow(<ExpenceForm />);
    expect(wrraper).toMatchSnapshot();
});


test('should render expence from with data',()=>{
    const wrraper = shallow(<ExpenceForm expence={expences[0]}/>);
    expect(wrraper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrraper = shallow(<ExpenceForm />);
    expect(wrraper).toMatchSnapshot();
    wrraper.find('form').simulate('submit',{
    preventDefault:()=>{ }
    });
    expect(wrraper.state('error').length).toBeGreaterThan(0);
    expect(wrraper).toMatchSnapshot();
});

test('should render describtion on change event',()=>{
    const value = 'New Describtion'
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('input').at(0).simulate('change',{
        target:{ value }
    });
    expect(wrraper.state('describtion')).toBe(value);
});

test('should render note on change event',()=>{
    const value = 'New Note'
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('textarea').simulate('change',{
        target:{ value }
    });
    expect(wrraper.state('note')).toBe(value);
});

test('should set Amount if valid input',()=>{
    const value = '23.60';
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('input').at(1).simulate('change',{
        target:{ value }
    });
    expect(wrraper.state('amount')).toBe(value);
});

test('should set Amount if no valid input',()=>{
    const value = '23.6087979';
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('input').at(1).simulate('change',{
        target:{ value }
    });
    expect(wrraper.state('amount')).toBe('');
});

test('should render onSubmit function correctly',()=>{
    const onSubmitSpy = jest.fn();
    const wrraper = shallow(<ExpenceForm expence={expences[0]} onSubmit={onSubmitSpy}/>);
    wrraper.find('form').simulate('submit',{
        preventDefault:()=>{ }
    });
    expect(wrraper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        describtion:expences[0].describtion,
        amount:expences[0].amount,
        note:expences[0].note,
        createdAt:expences[0].createdAt
    });
});

test('should render new date picker correctly',()=>{
    const now = moment();
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrraper.state('createdAt')).toEqual(now);
});

test('should render focus change correctly',()=>{
    const focused = true;
    const wrraper = shallow(<ExpenceForm />);
    wrraper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrraper.state('calenderFocused')).toBe(focused);
});