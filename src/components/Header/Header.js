import React from "react";

import { StyledHeader } from "./Header.styles";

import Logo from "./Logo/Logo";
import Controls from "./Controls/Controls";
import SearchBar from "./SearchBar/SearchBar";

function Header({handleToggleTaskOpen, handleAddTaskClose, handleSettingsOpen, handleSettingsClose}) {
    return(
        <StyledHeader>
            <Logo />
            <SearchBar />
            <Controls handleToggleTaskOpen={handleToggleTaskOpen} handleAddTaskClose={handleAddTaskClose} handleSettingsOpen={handleSettingsOpen} handleSettingsClose={handleSettingsClose} />
        </StyledHeader>
    )
}

export default Header;