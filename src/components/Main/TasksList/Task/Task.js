import React from "react";
import { StyledTask, StyledP, StyledButton } from "./Task.style";

import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({taskId, task, category, date, handleDeleteTask, darkTheme, handleMoveTaskToDone}) {

    const handleDelete = () => {
        handleDeleteTask(taskId);
    }

    const handleMoveTask = () => {
        handleMoveTaskToDone(taskId)
    }

    return(
        <StyledTask>
            <StyledP>{task}</StyledP>
            <StyledP>{category}</StyledP>
            <StyledP>{date}</StyledP>
            <StyledButton onClick={handleMoveTask} >
                <FontAwesomeIcon icon={faCheck} color={darkTheme ? 'red' : 'green'} />
            </StyledButton>
            <StyledButton onClick={handleDelete} >
                <FontAwesomeIcon icon={faTrash} color={darkTheme ? 'white' : ''} />
            </StyledButton>
        </StyledTask>
    )
}

export default Task;