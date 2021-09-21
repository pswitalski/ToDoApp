import React from "react";
import { StyledControls } from "./Controls.style";

import ControlButton from "./ControlButton/ControlButton";

function Controls({handleToggleTaskOpen, handleAddTaskClose, handleSettingsOpen, handleSettingsClose, darkTheme}) {

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
                <ControlButton settings onClick={handleSettings} darkTheme={darkTheme} />
                <ControlButton add onClick={handleAddTask} darkTheme={darkTheme} />
        </StyledControls>
    )
}

export default Controls;