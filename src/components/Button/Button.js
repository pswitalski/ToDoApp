import React from "react";
import { StyledButton } from "./Button.style";

function Button({text, secondary, onClick, type}) {
    return(
        <StyledButton type={type} secondary={secondary} onClick={onClick} >
            {text}
        </StyledButton>
    )
}

export default Button;