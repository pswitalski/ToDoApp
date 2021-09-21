import React from "react";
import { StyledButton } from "./Button.style";

function Button({text, secondary, onClick, type, bottom}) {
    return(
        <StyledButton type={type} secondary={secondary} onClick={onClick} bottom={bottom} >
            {text}
        </StyledButton>
    )
}

export default Button;