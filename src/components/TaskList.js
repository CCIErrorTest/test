import React, {useState} from 'react';
import TaskForm from './TaskForm.js';
import Task from './Task';

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

const removeTask = id => {
	const removeArr = [...tasks].filter(task => task.id !== id);
	setTasks(removeArr)
	return
}

const completeTask = id => {
	let updatedTasks = tasks.map(task => {
		if (task.id === id) {
			task.isComplete = !task.isComplete;
		}
		return task;
	});
	setTasks(updatedTasks);			
};

  return (
    <div>
      <h1>What Do You Have to Get Done Today?</h1>
      <TaskForm onSubmit={addTask}/>
			<Task tasks={tasks} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  );
};

export default TaskList
