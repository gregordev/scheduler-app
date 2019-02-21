import React from 'react';

const EditTaskPage = (props) => {
  return (
    <div>
        Edit task page {props.match.params.id}
    </div>
  );
};

export default EditTaskPage;