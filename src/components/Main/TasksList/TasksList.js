import React from "react";
import { StyledTasksList, StyledP, StyledH2 } from "./TasksList.style";
import Task from "./Task/Task";

function TasksList({tasksList, handleDeleteTask, darkTheme}) {

    console.log(tasksList.length)

    const generateTasks = tasksList.map((task) => (
        <Task key={task.taskId} taskId={task.taskId} task={task.task} category={task.category} date={task.date} handleDeleteTask={handleDeleteTask} darkTheme={darkTheme} />
    ))

    return(
        <StyledTasksList>
            <StyledH2>Tasks list: </StyledH2>
            {generateTasks}
            {!tasksList.length ? <StyledP>List is empty.</StyledP> : null}
        </StyledTasksList>
    )
}

export default TasksList;