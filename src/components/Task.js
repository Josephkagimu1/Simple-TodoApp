import React from 'react';

const Task = ({task , deleteTodo , index, handleEdit}) => {

  return (
    <div className='task'>
        <h2> {task} </h2>
        <button className='delete-btn' onClick={() => deleteTodo(index)}> Delete </button>
        <button className='edit-btn' onClick={() => handleEdit(index)}> Edit </button>

    </div>
  )
}

export default Task;