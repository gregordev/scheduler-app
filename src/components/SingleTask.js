import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeTask, setImportant} from '../actions/tasks';
import RemoveTaskModal from "./RemoveTaskModal";

const SingleTask = (props) => (
  <div className="single-task">
      <div className="single-task__left">

          <div className="checkbox-container-outer">
              <label htmlFor={props.id} className="checkbox-container">
                  <input id={props.id} type="checkbox" name="checkbox" checked={!!props.isCompleted} onChange={() => {
                      props.dispatch(setImportant(props.id, props.isCompleted));
                  }}/>
                  <span className="checkmark"/>
              </label>
          </div>

          <Link to={`/edit/${props.id}`}>
              <p className={"task-title " + (props.isCompleted ? "completed" : "not-completed")}>{props.title} </p>
          </Link>
      </div>
      <div className="single-task__right">
          <RemoveTaskModal
              task={props.task}
              onSubmit={() => {
                  props.dispatch(removeTask(props.id));
              }}
          />
          <p className={"hour " +(props.isCompleted ? "completed" : "not-completed")}>{props.hour}</p>
      </div>

      <br/><br/>
  </div>
);



export default connect()(SingleTask);