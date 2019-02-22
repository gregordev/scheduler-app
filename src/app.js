import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addTask } from './actions/tasks';
import { setDate, sortByImportance, sortByHour } from './actions/filters';
import showTasks from './selectors/tasks';

const store = configureStore();

store.dispatch(setDate(1100));
const task1 = store.dispatch(addTask({title: "Wash the dished", date: 1100, hour: "4:00", time: 240, isImportant: 1}));
const task2 = store.dispatch(addTask({title: "Go to gym", date: 1100, hour: "07:24", time: 444, isImportant: 0}));
const task3 = store.dispatch(addTask({title: "Last", date: 1100, hour: "5:12", time: 312, isImportant: 1}));
store.dispatch(sortByImportance());

const state = store.getState();
const showenTasks = showTasks(state.tasks, state.filters);
store.subscribe(() =>  {
    console.log(store.getState());
    console.log(showenTasks);
});

const JSX = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<JSX />, document.getElementById('app'));
