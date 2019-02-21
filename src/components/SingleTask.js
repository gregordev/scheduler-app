import React from 'react';

const SingleTask = ({title, hour, isImportant}) => (
  <div>
      <p>Title: {title} </p>
      <p>Hour: {hour}</p>
      <p>Is it important?: {isImportant}</p>
      <br/><br/>
  </div>
);

export default SingleTask;