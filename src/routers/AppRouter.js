import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SchedulerDashboard from '../components/SchedulerDashboard';
import AddTaskPage from '../components/AddTaskPage';
import EditTaskPage from '../components/EditTaskPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={SchedulerDashboard} exact={true} />
        <Route path="/add" component={AddTaskPage} />
        <Route path="/edit/:id" component={EditTaskPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
