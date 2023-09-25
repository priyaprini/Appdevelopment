import React, { useState } from 'react';
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import './Dashboard3.css'
const Dashboard3 = () => {
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [storedProjects, setStoredProjects] = useState([]);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleStoreProject = () => {
    if (projectName.trim() !== '' && startDate.trim() !== '' && endDate.trim() !== '') {
      const newProject = {
        projectName,
        startDate,
        endDate,
      };
      setStoredProjects([...storedProjects, newProject]);
      setProjectName('');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
   <>
       <Navbar/>
    <div className='das1'>
       <Slidebar/> 
       <div className="task-time-management-all">
      <div className="task-time-management">
        <div className="task-time-management-header">
          <h1>Task Time Management</h1>
        </div>
        <div className="project-details">
          <div className="input-container">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              placeholder="Enter project name"
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <button className="store-button" onClick={handleStoreProject}>
            Store
          </button>
        </div>
        <div className="project-details-summary">
          <h2>Project Details:</h2>
          <p>Project Name: {projectName}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
        </div>
        <div className="stored-projects">
          <h2>Stored Projects:</h2>
          {storedProjects.map((project, index) => (
            <div key={index}>
              <p>Project Name: {project.projectName}</p>
              <p>Start Date: {project.startDate}</p>
              <p>End Date: {project.endDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Dashboard3