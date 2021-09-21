import React from "react";
import { StyledTasksList, StyledP, StyledH2 } from "./TasksList.style";
import Task from "./Task/Task";
import Button from "../../Button/Button";

function TasksList({tasksList, handleDeleteTask, darkTheme, handleMoveTaskToDone, handleClearTasksList}) {

    const generateTasks = tasksList.map((task) => (
        <Task key={task.taskId} taskId={task.taskId} task={task.task} category={task.category} date={task.date} handleDeleteTask={handleDeleteTask} darkTheme={darkTheme} handleMoveTaskToDone={handleMoveTaskToDone} />
    ))

    return(
        <StyledTasksList>
            <StyledH2>Tasks list: </StyledH2>
            {generateTasks}
            {!tasksList.length ? <StyledP>List is empty.</StyledP> : null}
            {tasksList.length ? <Button text="clear all" secondary bottom onClick={handleClearTasksList} /> : null}
        </StyledTasksList>
    )
}

export default TasksList;