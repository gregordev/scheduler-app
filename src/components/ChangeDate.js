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

    handleAddDay = () => {
        this.setState((prevState) => ({
            date: prevState.date.add(1, 'days'),
            dayOfYear: this.state.date.dayOfYear()
        }), this.handleDispatch);

    };

    handleRemDay = () => {
        this.setState((prevState) => ({
            date: prevState.date.subtract(1, 'days'),
            dayOfYear: this.state.date.dayOfYear()
        }), this.handleDispatch);
    };

    isDisabled = () => {
      return this.state.dayOfYear === moment().dayOfYear();
    };


    render() {
        console.log(this.state.dayOfYear);
        return (

          <div>
              <p>{this.state.date.format("Do MMMM")}</p>
              <button onClick={() => this.handleAddDay()}> + </button>
              <button disabled={this.isDisabled()} onClick={() => this.handleRemDay()}> - </button>
          </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    filters: state.filters
});



export default connect(mapStateToProps)(ChangeDate);