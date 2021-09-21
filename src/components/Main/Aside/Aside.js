import React from "react";
import { StyledAside, StyledH2, StyledP } from "./Aside.style";
import Button from "../../Button/Button";

function Aside({doneTasks, handleClearDoneTasks}) {

    const generateTasks = doneTasks.map(task => (
        <StyledP key={task.taskId} >{task.task}</StyledP>
    ))

    return(
        <StyledAside>
            <StyledH2>Done:</StyledH2>

            {generateTasks}
            {doneTasks.length ? <Button text="clear all" secondary bottom onClick={handleClearDoneTasks} /> : null}
        </StyledAside>
    )
}

export default Aside;