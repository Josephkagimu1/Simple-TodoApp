import React from 'react';

const Task = ({task , deleteTodo , index}) => {

  return (
    <div className='task'>
        <h2> {task} </h2>
        <button className='delete-btn' onClick={() => deleteTodo(index)}> X </button>
    </div>
  )
}

export default Task;