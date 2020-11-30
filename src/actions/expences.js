import database from '../firebase/firebase';

export const addExpence = (expence) =>({
    type:'ADD_EXPENCE',
    expence
});


export const startAddExpence = (expenceData = {})=>{
   return (dispatch)=>{
    const {
        describtion = '',
        note = '', 
        amount = 0 ,
        createdAt = 0
    } = expenceData;
    const expence = {describtion, note, amount, createdAt};
    database.ref('expences').push(expence).then((ref)=>{
        dispatch(addExpence({
            id:ref.key,
            ...expence
        }));
    })
    
   }

}

export const removeExpence = (id=undefined) =>({
    type:'REMOVE_EXPENCE',
    id
});

export  const editExpence = (id=undefined,updates={}) =>({
    type:'EDIT_EXPENCE',
    id,
    updates
});