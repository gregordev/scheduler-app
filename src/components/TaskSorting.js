import React from 'react';
import { connect } from 'react-redux';
import { sortBycompletion, sortByName, sortByHour } from '../actions/filters';

const TaskSorting = (props) => (
    <div>
        <select
            onChange={(e) => {
                if (e.target.value === "hour") {
                    props.dispatch(sortByHour());
                } else if (e.target.value === "completion") {
                    props.dispatch(sortBycompletion());
                } else if (e.target.value === "name") {
                    props.dispatch(sortByName());
                }
            }}
                value={props.filters.sortBy}
        >
            <option value="hour">
                Sort by hour
            </option>
            <option value="completion">
                Sort by completion
            </option>
            <option value="name">
                Sort by name
            </option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  }
};

export default connect(mapStateToProps)(TaskSorting);