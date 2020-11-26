import {v4 as uuid} from 'uuid';

export const addExpence = ({describtion = '', note = '', amount = 0 ,createdAt = 0} = {}) =>({
    type:'ADD_EXPENCE',
    expence:{
        id:uuid(),
        describtion,
        note,
        amount,
        createdAt
    }
});


export const removeExpence = (id=undefined) =>({
    type:'REMOVE_EXPENCE',
    id
});

export  const editExpence = (id=undefined,updates={}) =>({
    type:'EDIT_EXPENCE',
    id,
    updates
});