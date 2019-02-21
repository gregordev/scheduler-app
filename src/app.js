import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addTask } from './actions/tasks';
import { setDate, sortByName, sortByImportance } from './actions/filters';
import showTasks from './selectors/tasks';

const store = configureStore();

store.dispatch(setDate(1130));
const task1 = store.dispatch(addTask({title: "Wash the dished", date: 1100, hour: 7, isImportant: false}));
const task2 = store.dispatch(addTask({title: "Go to gym", date: 1100, hour: 8, isImportant: true}));
const task3 = store.dispatch(addTask({title: "Last", date: 1130, hour: 4, isImportant: true}));
store.dispatch(sortByImportance());

const state = store.getState();
const showenTasks = showTasks(state.tasks, state.filters);
console.log(showenTasks);


const JSX = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<JSX />, document.getElementById('app'));
