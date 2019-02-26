import React from 'react';
import moment from 'moment'
const initialState = moment();
class ChangeDate extends React.Component {



    state = {
        date: initialState
    };


    componentDidUpdate() {
        console.log('new state: ' +this.state.date.format("Do MMMM"));
    }
    render() {


        const handleAddDay = () => {
            this.setState((prevState) => ({
                date: prevState.date.add(1, 'days')
            }));
        };

        const handleRemDay = () => {
            this.setState((prevState) => ({
                date: prevState.date.subtract(1, 'days')
            }));
        };


        return (

          <div>
              <p>{this.state.date.format("Do MMMM")}</p>
              <button onClick={handleAddDay}> + </button>
              <button onClick={handleRemDay}> - </button>
          </div>
        );
    }
}

export {ChangeDate};