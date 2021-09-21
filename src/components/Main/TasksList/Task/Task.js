import React from "react";
import { StyledTask, StyledP, StyledButton } from "./Task.style";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({taskId, task, category, date, handleDeleteTask}) {

    const handleDelete = () => {
        handleDeleteTask(taskId);
    }

    return(
        <StyledTask>
            <StyledP>{task}</StyledP>
            <StyledP>{category}</StyledP>
            <StyledP>{date}</StyledP>
            <StyledButton onClick={handleDelete} >
                <FontAwesomeIcon icon={faTrash} />
            </StyledButton>
        </StyledTask>
    )
}

export default Task;