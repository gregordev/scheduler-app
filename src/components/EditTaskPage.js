import React from 'react';
import TaskForm from "./TaskForm";
import { connect } from 'react-redux';
import {editTask} from "../actions/tasks";
import {removeTask} from "../actions/tasks";
import RemoveTaskModal from './RemoveTaskModal';

const EditTaskPage = (props) => {
    console.log(props);
  return (
    <div>
        <h1>Edit task</h1>
        Edit task page {props.match.params.id}
        <TaskForm
            task={props.task}
            onSubmit={(editedTask) => {
                props.dispatch(editTask(props.task.id, editedTask));
                props.history.push('/');
            }}
        />
        <RemoveTaskModal
            task={props.task}
            onSubmit={() => {
                props.dispatch(removeTask(props.task.id));
                props.history.push('/');
            }}
        />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    task: state.tasks.find((task) => {
        return task.id === props.match.params.id
    })
});

export default connect(mapStateToProps)(EditTaskPage);