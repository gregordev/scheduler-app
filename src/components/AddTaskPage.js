import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/tasks';

const AddTaskPage = (props) => {
    return (
        <div>
            <h1>Add expense</h1>
            <TaskForm
                onSubmit={(addedTask) => {
                    props.dispatch(addTask({...addedTask, date: 1100}));
                }}
            />
        </div>
    );
};

export default connect()(AddTaskPage);