import React, {useState} from 'react';
import TaskForm from './TaskForm.js';

function TaskList() {
const [task, setTask] = useState([])

const addTask = task => {
	// code to prevent multiple spaces in task input box, ensures that a task is inputed not just a space
	if (!task.text || /^\s*$/.test(task.text)) {
		return
	}
	
}
  return (
    <div>
      <h1>What Do You Have to Get Done Today?</h1>
      <TaskForm/>
    </div>
  )
}

export default TaskList
