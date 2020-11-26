import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensifyPage } from '../../components/addExpensifyPage';
import expences from '../data';
let addExpence , history , wrraper;
beforeEach(()=>{
     addExpence = jest.fn();
     history = { push:jest.fn() };
     wrraper = shallow(<CreateExpensifyPage addExpence={addExpence} history={history}/>);
})
test('should render Add expence page correctly',()=>{
    expect(wrraper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    wrraper.find('ExpenceForm').prop('onSubmit')(expences[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpence).toHaveBeenLastCalledWith(expences[1]);
})