import React from 'react';
import { connect } from 'react-redux';
import {setImportant} from '../actions/tasks';

const SingleTask = ({dispatch, id, title, hour, isImportant}) => (
  <div>
      <p>Title: {title} </p>
      <p>Hour: {hour}</p>
      <p>Is it important?: {isImportant}</p>
      <button onClick={() => {
          dispatch(setImportant(id, isImportant));
      }}>[]</button>
      <br/><br/>
  </div>
);

export default connect()(SingleTask);