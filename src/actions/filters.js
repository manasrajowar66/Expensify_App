export const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () =>({
    type:'SORT_BY_FILTER',
    sortBy:'amount'
});

export const sortByDate = () =>({
    type:'SORT_BY_FILTER',
    sortBy:'date' 
});

export const setStartDate = (startDate) =>({
    type:'SET_START_DATE',
    startDate
});


export const setEndDate = (endDate) =>({
    type:'SET_END_DATE',
    endDate
});
