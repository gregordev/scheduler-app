import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment';
import { setDate, sortBycompletion, sortByHour } from './actions/filters';
import { addTask } from './actions/tasks';
import showTasks from './selectors/tasks';

const store = configureStore();

store.dispatch(setDate(moment().dayOfYear()));
// const task1 = store.dispatch(addTask({title: "Wash the dished", date: moment().dayOfYear(), hour: "4:00", time: 240, isCompleted: 1}));
// const task2 = store.dispatch(addTask({title: "Go to gym", date: moment().dayOfYear(), hour: "07:24", time: 444, isCompleted: 0}));
// const task3 = store.dispatch(addTask({title: "Last", date: moment().dayOfYear(), hour: "5:12", time: 312, isCompleted: 1}));
store.dispatch(sortByHour());

const state = store.getState();
const showenTasks = showTasks(state.tasks, state.filters);
// store.subscribe(() =>  {
//     console.log(store.getState());
//     console.log(showenTasks);
// });

const JSX = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<JSX />, document.getElementById('app'));
