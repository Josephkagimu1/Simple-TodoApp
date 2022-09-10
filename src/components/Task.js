import React from 'react';

const Task = ({task, deleteTask, index}) => {
  return (
    <div className='task'>
        <h2> {task} </h2>
        <button onClick={()=>deleteTask(index)} className='delete-btn'>Delete</button>
    </div>
  )
}

export default Task;