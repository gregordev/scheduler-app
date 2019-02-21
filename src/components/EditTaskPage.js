import React from 'react';
import TaskForm from "./TaskForm";

const EditTaskPage = (props) => {
  return (
    <div>
        <h1>Edit expense</h1>
        Edit task page {props.match.params.id}
        <TaskForm />
    </div>
  );
};

export default EditTaskPage;