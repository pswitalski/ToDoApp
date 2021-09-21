import React from "react";
import { StyledMain } from "./Main.style";
import TasksList from "./TasksList/TasksList";
import Aside from "./Aside/Aside";

function Main({tasksList, handleDeleteTask}) {
    return(
        <StyledMain >
            <Aside />
            <TasksList tasksList={tasksList} handleDeleteTask={handleDeleteTask} />
        </StyledMain>
    )
}

export default Main;