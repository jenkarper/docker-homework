import React from 'react'
import TaskList from "./components/taskList"
import TaskForm from "./components/TaskForm"

const Footer = () => {
  return (
    <div>
      Homework app created for <a href="https://devopswithdocker.com/">DevOps with Docker</a> using <a href="https://www.boorje.com/react-todo-app/">this</a> template from boorje.com.
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ["Study for exam", "Finish logic problem set", "Write French essay"],
    }
  }

  addTask = task => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))
  }

  deleteTask = value => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== value),
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from homework planner!</h1>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <TaskForm addTask={this.addTask} />
        <br />
        <Footer />
      </div>
    )
  }
}

export default App