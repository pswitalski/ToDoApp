import React from "react";
import { StyledColorSwitch, StyledLeftContainer, StyledRightContainer, StyledMarker, StyledP } from "./ColorSwitch.style";

function ColorSwitch({darkTheme, setDarkTheme}) {

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
    }


    return(
        <StyledColorSwitch onClick={handleThemeChange} >
            <StyledLeftContainer>
                <StyledP>White</StyledP>
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledP>Dark</StyledP>
            </StyledRightContainer>
            <StyledMarker darkTheme={darkTheme} />
        </StyledColorSwitch>
    )
}

export default ColorSwitch;