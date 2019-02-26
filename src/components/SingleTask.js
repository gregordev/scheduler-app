import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setImportant} from '../actions/tasks';

const SingleTask = ({dispatch, id, title, hour, isImportant}) => (
  <div className="single-task">
      <input type="checkbox" checked={isImportant ? true : false} onChange={() => {
          dispatch(setImportant(id, isImportant));
      }}></input>
      <Link to={`/edit/${id}`}>
      <p>{title} </p>
      </Link>
      <p>{hour}</p>
      <p>is important: {isImportant}</p>
      <br/><br/>
  </div>
);

export default connect()(SingleTask);