import React from 'react';
import { connect } from 'react-redux';

const TaskList = (props) => (
      <div>
          <h1>Tasks today</h1>
          <p>{props.tasks.length}</p>
      </div>
);

const ConnectedTaskList = connect((state) => {
    return {
        tasks: state.tasks
    }
})(TaskList);

export default ConnectedTaskList;