import {combineReducers, createStore} from 'redux';
import uuid from 'uuid';

// ADD_TASK
const addTask = (
    {
     title = "",
     date = undefined,
     hour = undefined,
     isCompleted = false,
     isCompleted = false
    } = {}) => ({
    type: 'ADD_TASK',
    task: {
        id: uuid(),
        title,
        date,
        hour,
        isCompleted,
        isCompleted
    }
});
// EDIT_TASK
const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});

// REMOVE_TASK
const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id
});


// SORT_BY_NAME
const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

// SORT_BY_HOUR
const sortByHour = () => ({
   type: 'SORT_BY_HOUR'
});

const sortByDate = () => ({
   type: 'SORT_BY_DATE'
});

const sortBycompletion = () => ({
   type: 'SORT_BY_completion'
});

const setDate = (date) => ({
  type: 'SET_DATE',
  date
});

// Reducers
const tasksReducer = (state = tasksDefaultState, action) => {
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

const filtersReducer = (state = filtersDefaultState, action) => {
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

// Default states for reducers
const filtersDefaultState = {
    sortBy: 'hour',
    date: undefined
};

const tasksDefaultState = [];


const store = createStore(
    combineReducers({
        tasks: tasksReducer,
        filters: filtersReducer
    })
);
const showTasks = (tasks, {date, sortBy}) => {
    return tasks.filter((task) => {
        return task.date === date;
    }).sort((task1, task2) => {
      if (sortBy === 'completion') {
          return task2.isCompleted - task1.isCompleted || task1.hour - task2.hour;
      } else if (sortBy === 'hour') {
          return task1.hour > task2.hour ? 1 : -1;
      } else if (sortBy === 'name') {
          return (task1.title > task2.title ? 1 : -1);
      }
    })
};
store.subscribe(() => {
    const state = store.getState();
    const showenTasks = showTasks(state.tasks, state.filters);
    console.log(state);
    console.log(showenTasks);
});


store.dispatch(setDate(1100));
const task1 = store.dispatch(addTask({title: "Wash the dished", date: 1100, hour: 7, isCompleted: false}));
const task2 = store.dispatch(addTask({title: "Go to gym", date: 1100, hour: 8, isCompleted: true}));
const task3 = store.dispatch(addTask({title: "Last", date: 1100, hour: 4, isCompleted: true}));
// store.dispatch(editTask(task1.task.id, {title: "XxxxXx", date: 900}));
// store.dispatch(removeTask(task1.task.id));
store.dispatch(sortByName());


// That is like the state of an applications should look like
const stateX = {
    tasks: {
        title: "",
        date: undefined,
        hour: undefined,
        isCompleted: false,
        isCompleted: false
    },

    filters: {
        sortBy: 'hour', // completion, alphabet, hour
        date: undefined
    }
};