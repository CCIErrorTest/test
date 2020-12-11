import React, {useState} from 'react';
import TaskForm from './TaskForm.js';

function TaskList() {
const [tasks, setTasks] = useState([])

const addTask = task => {
	// console.log('this is task', task)
	// code to prevent multiple spaces in task input box, ensures that a task is inputed not just a space
	if (!task.text || /^\s*$/.test(task.text)) {
		return
	}

	const newTasks = [task, ...tasks]

	setTasks(newTasks)
	// console.log('this is tasks:',...tasks)
}
  return (
    <div>
      <h1>What Do You Have to Get Done Today?</h1>
      <TaskForm onSubmit={addTask}/>
    </div>
  )
}

export default TaskList
