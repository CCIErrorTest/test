import React, {useState} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function Task() {
  const [edit, setEdit] = useState({
     id: null,
     value: ''
  });

  return tasks.map((task, index) => {
		<div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>
			
		</div>
	})
}

export default Task
