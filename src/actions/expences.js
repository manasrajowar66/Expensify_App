import database from '../firebase/firebase';

export const addExpence = (expence) =>({
    type:'ADD_EXPENCE',
    expence
});


export const startAddExpence = (expenceData = {})=>{
   return (dispatch, getState)=>{
       const uid = getState().auth.uid;
    const {
        describtion = '',
        note = '', 
        amount = 0 ,
        createdAt = 0
    } = expenceData;
    const expence = {describtion, note, amount, createdAt};
    database.ref(`Users/${uid}/expences`).push(expence).then((ref)=>{
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

export const startRemoveExpence = (id)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
       database.ref(`Users/${uid}/expences/${id}`).remove().then(()=>{
           dispatch(removeExpence(id));
       });
    }
}

export  const editExpence = (id,updates={}) =>({
    type:'EDIT_EXPENCE',
    id,
    updates
});

export const startEditExpence = (id,expence) =>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`Users/${uid}/expences/${id}`).update(expence).then(()=>{
            dispatch(editExpence(id,expence));
        });
     }
}

export const setExpence = (expences) =>({
  type:'SET_EXPENCE',
  expences
});

export const startSetExpence = () =>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`Users/${uid}/expences`).once('value').then((snapshot)=>{
            const Expences = [];
            snapshot.forEach((childSnapshot)=>{
                Expences.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key
                });
            });
            dispatch(setExpence(Expences));
        });
    }

};

