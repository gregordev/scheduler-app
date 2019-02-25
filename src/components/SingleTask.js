import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setImportant} from '../actions/tasks';

const SingleTask = ({dispatch, id, title, hour, isImportant}) => (
  <div>
      <Link to={`/edit/${id}`}>
      <p>Title: {title} </p>
      </Link>
      <p>Hour: {hour}</p>
      <p>Is it important?: {isImportant}</p>
      <button onClick={() => {
          dispatch(setImportant(id, isImportant));
      }}>[]</button>
      <br/><br/>
  </div>
);

export default connect()(SingleTask);