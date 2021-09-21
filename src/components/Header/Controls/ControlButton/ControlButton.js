import React from "react";
import { StyledControlButton } from "./ControlButton.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlus } from "@fortawesome/free-solid-svg-icons";

function ControlButton({settings, add, onClick, darkTheme}) {
    return(
        <StyledControlButton onClick={onClick}>
            {settings ? <FontAwesomeIcon icon={faCog} size={"lg"} color={darkTheme ? 'white' : '#656565'} /> : null}
            {add ? <FontAwesomeIcon icon={faPlus} size={"lg"} color={darkTheme ? 'white' : '#656565'} /> : null}
        </StyledControlButton>
    )
}

export default ControlButton;