import React from "react"

class TaskForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { taskInput: "" };
  }

  handleChange = event => {
    this.setState({ taskInput: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.taskInput)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="No rest for the wicked..."
          value={this.state.taskInput}
          onChange={event => this.handleChange(event)}
        />
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default TaskForm