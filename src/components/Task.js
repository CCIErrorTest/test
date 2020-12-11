import React, {useState} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Task({tasks, completeTask}) {
  const [edit, setEdit] = useState({
     id: null,
     value: ''
  });

  return tasks.map((task, index) => {
		<div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>

			<div key={task.id} onClick={() => completeTask(task.id)}>
				{task.text}
			</div>
			<div className='icons'>
				<RiCloseCircleLine/>
				<TiEdit/>
			</div>

		</div>
	});
}

export default Task
