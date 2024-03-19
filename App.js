import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'React', description: 'React is a JavaScript library developed by Facebook', editing: false },
    { task: 'Task', description: 'Default Description', editing: false }
  ]);

  const toggleEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].editing = !updatedTasks[index].editing;
    setTasks(updatedTasks);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].editing = false;
    setTasks(updatedTasks);
  };

  const handleChange = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { task: 'New Task', description: 'New Description', editing: false }]);
  };

  return (
    <div className="container mt-3">
      <div className="add-task-btn">
        <button className="btn btn-primary" onClick={addTask}>
          Add New Task
        </button>
      </div>
      <div className="task-container">
        {tasks.map((task, index) => (
          <div key={index} className="card mt-3 shadow">
            <div className="card-body">
              {task.editing ? (
                <div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={task.task}
                    onChange={(e) => handleChange(index, 'task', e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={task.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                  />
                  <button className="btn btn-primary mr-2" onClick={() => saveTask(index)}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={() => toggleEdit(index)}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h5 className="card-title">{task.task}</h5>
                  <p className="card-text">{task.description}</p>
                  <div className="float-right">
                    <button className="btn btn-primary mr-2" onClick={() => toggleEdit(index)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//----------------------------------------------------------------
