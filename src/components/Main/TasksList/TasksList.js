import React from "react";
import { StyledTasksList } from "./TasksList.style";
import Task from "./Task/Task";

function TasksList({tasksList, handleDeleteTask}) {

    const generateTasks = tasksList.map((task) => (
        <Task key={task.taskId} taskId={task.taskId} task={task.task} category={task.category} date={task.date} handleDeleteTask={handleDeleteTask} />
    ))

    return(
        <StyledTasksList>
            {generateTasks}
        </StyledTasksList>
    )
}

export default TasksList;