import filterReducer from '../../reducers/filter';
import moment from 'moment';

test('should setup default values',()=>{
    const state = filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date' ,
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should sorrBy amount',()=>{
    const state = filterReducer(undefined,{type:'SORT_BY_FILTER',sortBy:'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should sorrBy date',()=>{
    const currentState = {
        text:'',
        sortBy: 'amount' ,
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filterReducer(currentState,{type:'SORT_BY_FILTER',sortBy:'date'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const currentState = {
        text:'',
        sortBy: 'amount' ,
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filterReducer(currentState,{type:'SET_TEXT_FILTER',text:'ren'});
    expect(state.text).toBe('ren');
});

test('should set start date filter',()=>{
    const currentMoment = moment();
    const currentState = {
        text:'',
        sortBy: 'amount' ,
        startDate:undefined,
        endDate:undefined
    }
    const state = filterReducer(currentState,{type:'SET_START_DATE',startDate:currentMoment});
    expect(state.startDate).toEqual(currentMoment);
});

test('should set end date filter',()=>{
    const currentMoment = moment();
    const currentState = {
        text:'',
        sortBy: 'amount' ,
        startDate:undefined,
        endDate:undefined
    }
    const state = filterReducer(currentState,{type:'SET_END_DATE',endDate:currentMoment});
    expect(state.endDate).toEqual(currentMoment);
});

