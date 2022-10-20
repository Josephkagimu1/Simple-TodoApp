import './App.css';
import {useState} from 'react';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  //adding Task
  function AddTask(){
    if (task !== "") {
    setTaskList([ ...taskList, {task:task} ]);
    setTask('');
    }
  }

   // deleting Todo .
  const deleteTodo = (index) => {
  var newList = taskList;
  newList.splice(index,1);
  setTaskList([...newList]);
}

  return (
    <div className="App">
      <h1 className='title'> Todo App </h1>
     <input type='text' value={task} onChange={(e) => {setTask(e.target.value)}} />
     <button onClick={AddTask}> Add </button>

     {taskList.map((task , index) => {
       return <Task task={task.task} deleteTodo={deleteTodo} index={index} />
     } )}

    </div>
  );
}

export default App;
