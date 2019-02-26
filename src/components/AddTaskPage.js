import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/tasks';

const AddTaskPage = (props) => {
    const goBack = () => {
        props.history.push('/');
    };
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>Add task</h1>
            <TaskForm
                onSubmit={(addedTask) => {
                    props.dispatch(addTask({...addedTask, date: props.filters.date}));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {filters: state.filters}
};

export default connect(mapStateToProps)(AddTaskPage);