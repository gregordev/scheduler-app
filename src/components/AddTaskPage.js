import React from 'react';
import TaskForm from './TaskForm';

const AddTaskPage = (props) => {
    return (
        <div>
            <h1>Add expense</h1>
            <TaskForm
                onSubmit={(przekazane) => {
                    console.log(przekazane);
                }}
            />
        </div>
    );
};

export default AddTaskPage;