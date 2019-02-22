import React from 'react';
import TimePicker from 'react-time-picker'

export default class TaskForm extends React.Component {
    state = {
      title: '',
      hour: undefined,
      error: '',
      time: undefined,
      date: 1100
    };

    onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(() => ({
        title
      }));
    };

    onTimeChange = (hour) => {

        this.setState({ hour})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const hourArr = this.state.hour.split(":");
        const timeCount = parseInt(hourArr[0], 10) * 60 + parseInt(hourArr[1], 10);

        if (!this.state.title || !this.state.hour) {
            this.setState(() => ({
                error: "Please provide description and hour"
            }))
        } else {

            this.setState(() => ({
                title: '',
                hour: undefined,
                time: undefined,
                error: ''
            }))
        }
        this.props.onSubmit((
            {
                title: this.state.title,
                hour: this.state.hour,
                time: timeCount,
            }
        ));
    };


    render() {
        return (
          <div>
                  {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.onSubmit}>
                  <TimePicker
                      disableClock={true}
                      hour={this.state.hour}
                      onChange={this.onTimeChange}
                      value={this.state.hour}
                  />
                  <input
                      type="text"
                      placeholder="Title of the task"
                      autoFocus
                      value={this.state.title}
                      onChange={this.onTitleChange}
                  />
                  <button>
                      Add
                  </button>
              </form>
          </div>
        );
    }
}