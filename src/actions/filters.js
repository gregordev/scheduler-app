
// SORT_BY_NAME
export const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

// SORT_BY_HOUR
export const sortByHour = () => ({
    type: 'SORT_BY_HOUR'
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_IMPORTANCE
export const sortByImportance = () => ({
    type: 'SORT_BY_IMPORTANCE'
});

export const setDate = (date) => ({
    type: 'SET_DATE',
    date
});