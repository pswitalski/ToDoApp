import React from "react";
import { StyledMain } from "./Main.style";
import TasksList from "./TasksList/TasksList";
import Aside from "./Aside/Aside";

function Main({tasksList, handleDeleteTask, darkTheme, doneTasks, handleMoveTaskToDone, handleClearTasksList, handleClearDoneTasks}) {
    return(
        <StyledMain >
            <TasksList tasksList={tasksList} handleDeleteTask={handleDeleteTask} darkTheme={darkTheme} handleMoveTaskToDone={handleMoveTaskToDone} handleClearTasksList={handleClearTasksList} />
            <Aside doneTasks={doneTasks} handleClearDoneTasks={handleClearDoneTasks} />
        </StyledMain>
    )
}

export default Main;