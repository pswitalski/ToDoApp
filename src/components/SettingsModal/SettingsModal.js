import React from "react";
import { StyledSettingsModal, StyledH2 } from "./SettingsModal.style";
import ColorSwitch from "./ColorSwitch/ColorSwitch";
import Button from "../Button/Button";

function SettingsModal({darkTheme, setDarkTheme, handleSettingsClose}) {
    return(
        <StyledSettingsModal>
            <StyledH2>Change colors theme:</StyledH2>
            <ColorSwitch darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Button secondary  text="close" onClick={handleSettingsClose} />
        </StyledSettingsModal>
    )
}

export default SettingsModal;