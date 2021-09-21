import React from "react";
import { StyledControls } from "./Controls.style";

import ControlButton from "./ControlButton/ControlButton";

function Controls({handleToggleTaskOpen, handleAddTaskClose, handleSettingsOpen, handleSettingsClose}) {

    const handleSettings = () => {
        handleAddTaskClose();
        handleSettingsOpen();
    }

    const handleAddTask = () => {
        handleSettingsClose();
        handleToggleTaskOpen();
    }

    return(
        <StyledControls>
                <ControlButton settings onClick={handleSettings} />
                <ControlButton add onClick={handleAddTask} />
        </StyledControls>
    )
}

export default Controls;