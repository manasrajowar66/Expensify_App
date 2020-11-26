import getVisible from '../../store/visibleExpences';
import moment from 'moment';
import expences from '../data';


test('should filter by text',()=>{
    const filters = {
        text:'t',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const action = getVisible(expences,filters);
    expect(action).toEqual([expences[2],expences[1]]);
});


test('should filter by startDate',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const action = getVisible(expences,filters);
    expect(action).toEqual([expences[2],expences[0]]);
});

test('should filter by endDate',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    };
    const action = getVisible(expences,filters);
    expect(action).toEqual([expences[0],expences[1]]);
});

test('should sort by date',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const action = getVisible(expences,filters);
    expect(action).toEqual([expences[2],expences[0],expences[1]]);
});

test('should sort by amount',()=>{
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const action = getVisible(expences,filters);
    expect(action).toEqual([expences[1],expences[0],expences[2]]);
});
