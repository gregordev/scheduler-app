import React from 'react';
import moment from 'moment'
const initialState = moment();
import {connect} from 'react-redux';
import {setDate} from '../actions/filters';

class ChangeDate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            date: initialState,
            dayOfYear: initialState.dayOfYear()
        };
    }

    handleDispatch = () => {
        const date = this.state.dayOfYear;
        this.props.dispatch(setDate(date));
    };

    handleAddDay = (e) => {
        this.setState((prevState) => ({
            date: prevState.date.add(1, 'days'),
            dayOfYear: this.state.date.dayOfYear()
        }), this.handleDispatch);

    };

    handleRemDay = (e) => {
        this.setState((prevState) => ({
            date: prevState.date.subtract(1, 'days'),
            dayOfYear: this.state.date.dayOfYear()
        }), this.handleDispatch);
    };


    render() {

        return (

          <div>
              <p>{this.state.dayOfYear}</p>
              <button onClick={(e) => this.handleAddDay()}> + </button>
              <button onClick={(e) => this.handleRemDay()}> - </button>
          </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    filters: state.filters
});



export default connect(mapStateToProps)(ChangeDate);