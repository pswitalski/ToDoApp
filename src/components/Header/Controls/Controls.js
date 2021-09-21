import React from "react";
import { StyledControls } from "./Controls.style";

import ControlButton from "./ControlButton/ControlButton";

function Controls() {
    return(
        <StyledControls>
                <ControlButton settings />
                <ControlButton add />
        </StyledControls>
    )
}

export default Controls;