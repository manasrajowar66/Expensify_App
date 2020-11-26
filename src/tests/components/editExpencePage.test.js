import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensifyPage } from '../../components/editExpensifyPage';
import expences from '../data';


let editExpence , removeExpence , history , wrraper;
beforeEach(()=>{
    editExpence = jest.fn();
    removeExpence = jest.fn();
    history = { push:jest.fn() };
    wrraper = shallow(<EditExpensifyPage editExpence={editExpence} removeExpence={removeExpence} history={history} expence={expences[1]}/>);
})
test('should render edit Expence page',()=>{
    expect(wrraper).toMatchSnapshot();
});

test('should handle editExpence',()=>{
   wrraper.find('ExpenceForm').prop('onSubmit')(expences[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(editExpence).toHaveBeenLastCalledWith(expences[1].id,expences[1]);
});

test('should handle removeExpence',()=>{
    wrraper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpence).toHaveBeenLastCalledWith(expences[1].id);
 });