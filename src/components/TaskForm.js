import React from 'react';
import TimePicker from 'react-time-picker'

export default class TaskForm extends React.Component {
    state = {
      title: '',
      hour: undefined
    };

    onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(() => ({
        title
      }));
    };

    onTimeChange = hour => this.setState({ hour });

    render() {
        return (
          <div>
              <form>
                  <TimePicker
                      disableClock={true}
                      hour={this.state.hour}
                      onChange={this.onTimeChange}
                      required={true}
                  />
                  <input
                      type="text"
                      placeholder="Title of the task"
                      autoFocus
                      value={this.state.description}
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