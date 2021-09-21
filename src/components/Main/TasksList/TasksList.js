import React from "react";
import { StyledTasksList } from "./TasksList.style";
import Task from "./Task/Task";

function TasksList() {
    return(
        <StyledTasksList>
            <Task />
            <Task />
            <Task />
        </StyledTasksList>
    )
}

export default TasksList;