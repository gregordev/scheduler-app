import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/tasks';

const AddTaskPage = (props) => {
    return (
        <div>
            <h1>Add task</h1>
            <TaskForm
                onSubmit={(addedTask) => {
                    props.dispatch(addTask({...addedTask, date: 1100}));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

export default connect()(AddTaskPage);