/* eslint-disable no-unused-vars */
import expences from '../data';
import expenceReducer from '../../reducers/expences';
import moment from 'moment';

test('should setup default expence',()=>{
    const state = expenceReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expence',()=>{
    const action = {
        type:'REMOVE_EXPENCE',
        id:expences[1].id
    }
    const state = expenceReducer(expences,action);
    expect(state).toEqual([expences[0],expences[2]]);
});

test('should add expence',()=>{
    const action = {
        type:'ADD_EXPENCE',
        expence : {
            id:'4',
            describtion:'internet',
            note:'',
            amount:500,
            createdAt:10000
        }
    }
    const state = expenceReducer(expences,action);
    expect(state).toEqual([...expences,action.expence]);
});

test('should edit expence',()=>{
    const action = {
        type:'EDIT_EXPENCE',
        id:expences[1].id,
        updates : {
            describtion:'internet',
            amount:500
        }
    }
    const state = expenceReducer(expences,action);
    expect(state[1]).toEqual({
        id:'2',
        describtion:'internet',
        note:'',
        amount:500,
        createdAt:moment(0).subtract(4,'days').valueOf()
    });
});

test('should edit expence with invalid id',()=>{
    const action = {
        type:'EDIT_EXPENCE',
        id:'-1',
        updates : {
            describtion:'internet',
            amount:500
        }
    }
    const state = expenceReducer(expences,action);
    expect(state).toEqual(expences);
});

