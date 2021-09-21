import React from "react";
import { StyledMain } from "./Main.style";
import TasksList from "./TasksList/TasksList";
import Aside from "./Aside/Aside";

function Main() {
    return(
        <StyledMain >
            <Aside />
            <TasksList />
        </StyledMain>
    )
}

export default Main;