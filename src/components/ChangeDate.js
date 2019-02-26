import React from 'react';
import moment from 'moment'
const initialState = moment();
import {connect} from 'react-redux';
import {setDate} from '../actions/filters';

class ChangeDate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            date: initialState
        };
    }

    handleDispatch = () => {
        this.props.dispatch(setDate(this.state.date.dayOfYear()));
    };

    handleAddDay = (e) => {

        this.setState((prevState) => ({
            date: prevState.date.add(1, 'days')
        }));
        console.log(this.state.date.format('Do MMMM'));
    };

    handleRemDay = (e) => {
        const x = this.state.date.dayOfYear();
        this.setState((prevState) => ({
            date: prevState.date.subtract(1, 'days')
        }));
    };


    render() {




        return (

          <div>
              <p>{this.state.date.format("Do MMMM")}</p>
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