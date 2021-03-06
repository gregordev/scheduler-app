import React from 'react';
import { connect } from 'react-redux';
import SingleTask from './SingleTask';
import showenTasks from '../selectors/tasks';

const TaskList = (props) => (
      <div>
          <h2>Tasks today</h2>
          {props.tasks.length ? "" : <p>No tasks for today. Add some tasks!</p>}
          {
              props.tasks.map((task) => {
                    return (
                        <SingleTask
                            key={task.id}
                            {...task}
                        />
                    )
              })
          }
      </div>
);

const mapStateToProps = (state) => {
  return {
      tasks: showenTasks(state.tasks, state.filters)
  }
};

export default connect(mapStateToProps)(TaskList);