const expencesDefaultReducer = [];

const expenceReducer = (state = expencesDefaultReducer , action ) =>{
    switch (action.type) {
        case 'ADD_EXPENCE':
            return [...state,action.expence];
        case 'REMOVE_EXPENCE':
            return state.filter(({ id })=> action.id !== id)
        case 'EDIT_EXPENCE':
            return state.map((expence)=>{
                if(expence.id === action.id)
                return {
                    ...expence,
                    ...action.updates
                };
                else
                return expence;
            })
        default:
            return state;
    }
}

export default expenceReducer;