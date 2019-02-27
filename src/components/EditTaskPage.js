import React from 'react';
import TaskForm from "./TaskForm";
import { connect } from 'react-redux';
import {editTask} from "../actions/tasks";
import {IoIosArrowRoundBack} from "react-icons/io";

const EditTaskPage = (props) => {
    const goBack = () => {
        props.history.push('/');
    };
  return (
    <div>
        <button className="btn-go-back" onClick={goBack}><IoIosArrowRoundBack size={56}/></button>
        <h1>Edit task</h1>
        <TaskForm
            task={props.task}
            onSubmit={(editedTask) => {
                props.dispatch(editTask(props.task.id, editedTask));
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