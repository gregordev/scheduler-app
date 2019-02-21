

const tasksDefaultState = [];

export default (state = tasksDefaultState, action) => {
    switch(action.type) {
        /*
            ADD_TASK
            1. Declare an array
            2. Inside is spreaded state object
            3. Add a new task provided by the action
         */
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ];

        case 'SET_IMPORTANT':
            return state.map((task) => {
               if (task.id === action.id) {
                   return {
                       ...task,
                       isImportant: action.isImportant ? 0 : 1
                   }
               } else {
                   return task;
               }
            });
        /*
            EDIT_TASK
            1. Map through entire tasks array
            2. Find one task with specific id
            3. If its found, return new object with updates
            4. If not, just return an old state object
         */
        case 'EDIT_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates
                    }
                } else {
                    return task;
                }
            });
        case 'REMOVE_TASK':
            return state.filter((task) => {
                return task.id !== action.id
            });
        default:
            return state;
    }
};