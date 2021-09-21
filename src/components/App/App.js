import React, { useState } from "react";

import GlobalStyle from "../../styles/GlobalStyle";
import AddTask from "../AddTask/AddTask";

import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {

  const [addTaskOpen, setAddTaskOpen] = useState(false);

  const handleToggleTaskOpen = () => {
    setAddTaskOpen(!addTaskOpen);
  }

  const handleAddTaskClose = () => {
    setAddTaskOpen(false);

  }

  const [tasksList, setTasksList] = useState([]);

  const [nextTaskId, setNextTaskId] = useState(0);

  const handleAddNewTask = (newTask) => {
    const oldTaskList = [...tasksList];
    const newTasksList = [newTask, ...oldTaskList];
    setTasksList(newTasksList);
    const nextId = nextTaskId + 1;
    setNextTaskId(nextId);
  }

  const handleDeleteTask = (taskId) => {
    const currentTasksList = [...tasksList];
    const newTasksList = currentTasksList.filter((task => task.taskId !== taskId))
    setTasksList(newTasksList);
  }

  return (
    <div className="App">
      <GlobalStyle />
        <Header handleToggleTaskOpen={handleToggleTaskOpen} handleAddTaskClose={handleAddTaskClose} />
        <Main tasksList={tasksList} handleDeleteTask={handleDeleteTask} />

        {addTaskOpen ? <AddTask nextTaskId={nextTaskId} handleAddTaskClose={handleAddTaskClose} handleAddNewTask={handleAddNewTask} /> : null}
    </div>
  );
}

export default App;
