import React, {useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Task({tasks, completeTask, removeTask}) {
  const [edit, setEdit] = useState({
     id: null,
     value: ''
  });

  return tasks.map((task, index) => {
		return(
		<div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>

			<div key={task.id} onClick={() => completeTask(task.id)}>
				{task.text}
			</div>
			<div className='icons'>
				<RiCloseCircleLine
				className='delete-icon'
				onClick={()=> removeTask(task.id)}
				/>
				<TiEdit
				className='edit-icon'
				onClick={() => setEdit({id: task.id, value: task.text})}
				/>
			</div>

		</div>
		);
	});
}

export default Task
