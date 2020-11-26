import moment from 'moment';

const filterDefaultReducer = {
    text:'',
    sortBy: 'date' ,
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};



const filterReducer = (state = filterDefaultReducer , action ) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_FILTER':
            return {
                ...state,
                sortBy:action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }   
        default:
            return state;
    }
}

export default filterReducer;