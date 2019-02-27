const filtersDefaultState = {
    sortBy: 'hour',
    date: undefined
};

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            };
        case 'SORT_BY_HOUR':
            return {
                ...state,
                sortBy: 'hour'
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_completion':
            return {
                ...state,
                sortBy: 'completion'
            };
        default:
            return state;
    }
};