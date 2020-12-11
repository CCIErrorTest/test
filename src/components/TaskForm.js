import React, {useState} from 'react'

function TaskForm(props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
		// console.log(e.target)
      setInput(e.target.value)
  };

  const handleSubmit = e => {
      // prevent screen reloading when todo button is clicked with new task 
      e.preventDefault();
			// console.log('this is props for taskForm:',props)
			// console.log('this is the event:', e)
      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      });

      setInput('');
	}
	
	return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a task" value={input} name="text" className="task-input" onChange={handleChange}/>
      <button className="task-button">Add Task</button>
    </form>
  )
}

export default TaskForm
 