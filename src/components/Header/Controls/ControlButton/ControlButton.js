import React from "react";
import { StyledControlButton } from "./ControlButton.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlus } from "@fortawesome/free-solid-svg-icons";

function ControlButton({settings, add}) {
    return(
        <StyledControlButton>
            {settings ? <FontAwesomeIcon icon={faCog} size={"lg"} /> : null}
            {add ? <FontAwesomeIcon icon={faPlus} size={"lg"} /> : null}
        </StyledControlButton>
    )
}

export default ControlButton;