import React from 'react';

const Task = ({task, deleteTask}) => {
  return (
    <div className='task'>
        <h2> {task} </h2>
        <button onClick={deleteTask} className='delete-btn'>Delete</button>
    </div>
  )
}

export default Task;