import React from "react";
import { StyledMain } from "./Main.style";
import TasksList from "./TasksList/TasksList";
import Aside from "./Aside/Aside";

function Main({tasksList, handleDeleteTask, darkTheme}) {
    return(
        <StyledMain >
            <Aside />
            <TasksList tasksList={tasksList} handleDeleteTask={handleDeleteTask} darkTheme={darkTheme} />
        </StyledMain>
    )
}

export default Main;