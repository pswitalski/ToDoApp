import React from "react";
import { StyledTasksList, StyledP } from "./TasksList.style";
import Task from "./Task/Task";

function TasksList({tasksList, handleDeleteTask}) {

    console.log(tasksList.length)

    const generateTasks = tasksList.map((task) => (
        <Task key={task.taskId} taskId={task.taskId} task={task.task} category={task.category} date={task.date} handleDeleteTask={handleDeleteTask} />
    ))

    return(
        <StyledTasksList>
            {generateTasks}
            {!tasksList.length ? <StyledP>List is empty.</StyledP> : null}
        </StyledTasksList>
    )
}

export default TasksList;