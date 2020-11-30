/* eslint-disable no-unused-vars */
import { addExpence , editExpence , removeExpence } from '../../actions/expences';

test('should setup remove action object',()=>{
  const action = removeExpence(44);
  expect(action).toEqual({type:'REMOVE_EXPENCE',id:44});
});

test('should setup edit action object',()=>{
  const action = editExpence(44,{describtion:'coffee'});
  expect(action).toEqual({type:'EDIT_EXPENCE',id:44,updates:{describtion:'coffee'}});
});

test('should setup add action object with data',()=>{
    const expenceData = {
        describtion:'tea',
        amount:12,
        createdAt:1000,
        note:'uifh'
    }
    const action = addExpence(expenceData);
    expect(action).toEqual({
        type:'ADD_EXPENCE',
        expence:{
            ...expenceData,
            id:expect.any(String)
        }
    });
});

// test('should setup add action object with no data',()=>{
//     const action = addExpence();
//     expect(action).toEqual({
//         type:'ADD_EXPENCE',
//         expence:{
//             id:expect.any(String),
//             describtion:'',
//             note:'',
//             amount:0,
//             createdAt:0
//         }
//     });
// });

