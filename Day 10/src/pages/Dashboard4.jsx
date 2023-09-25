import React ,{useState} from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import './Dashboard4.css'
const Dashboard4 = () => {
  const [task, setTask] = useState('');
  const [doorNo, setDoorNo] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDoorNoChange = (e) => {
    setDoorNo(e.target.value);
  };

  const handleAssignTask = () => {
    if (task.trim() !== '' && doorNo.trim() !== '') {

      setTasks([...tasks, { task, doorNo }]);
      setTask('');
      setDoorNo('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <>
      <Navbar />
      <div className='das4'>
        <Slidebar />
        <div className="center-container">
          <div className='center-container1'>
            <div className="tasklist-container">
              <h1>Task List</h1>
              <div className="task-input-container">
                <form>
                  <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={handleTaskChange}
                    required // Make the task input required
                  />
                  <input
                    type="text"
                    placeholder="Enter Task Date"
                    value={doorNo}
                    onChange={handleDoorNoChange}
                    required // Make the door number input required
                  />
                  <button className="assign-button" onClick={handleAssignTask}>
                    Assign
                  </button>
                </form>
              </div>
              {/* ... */}
              <div className="task-list">
                <h2>Tasks:</h2>
                <ul>
                  {tasks.map((taskObj, index) => (
                    <li key={index}>
                      Task: {taskObj.task} | Task Date: {taskObj.doorNo}
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveTask(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ... */}

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard4