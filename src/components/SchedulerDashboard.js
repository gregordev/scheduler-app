import React from 'react';
import TaskList from './TaskList';
import TaskSorting from './TaskSorting';

const SchedulerDashboard = () => (
  <div>
      <TaskSorting />
      <TaskList />
  </div>
);

export default SchedulerDashboard;
