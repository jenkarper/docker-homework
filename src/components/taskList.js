import React from "react"

const Task = props =>
  <li onClick={() => props.deleteTask(props.task)}>{props.task}</li>

const TaskList = props =>
<ul>
  {props.tasks.map(task => (
    <Task
      task={task}
      key={task}
      deleteTask={props.deleteTask}
    />
  ))}
</ul>

export default TaskList