import React from "react";
import { StyledControls } from "./Controls.style";

import ControlButton from "./ControlButton/ControlButton";

function Controls({handleToggleTaskOpen, handleAddTaskClose}) {

    return(
        <StyledControls>
                <ControlButton settings onClick={handleAddTaskClose} />
                <ControlButton add onClick={handleToggleTaskOpen} />
        </StyledControls>
    )
}

export default Controls;