import React from "react";

import { StyledHeader } from "./Header.styles";

import Logo from "./Logo/Logo";
import Controls from "./Controls/Controls";
import SearchBar from "./SearchBar/SearchBar";

function Header({handleToggleTaskOpen, handleAddTaskClose, handleSettingsOpen, handleSettingsClose, darkTheme, handleSearch}) {
    return(
        <StyledHeader>
            <Logo />
            <SearchBar handleSearch={handleSearch} />
            <Controls handleToggleTaskOpen={handleToggleTaskOpen} handleAddTaskClose={handleAddTaskClose} handleSettingsOpen={handleSettingsOpen} handleSettingsClose={handleSettingsClose} darkTheme={darkTheme} />
        </StyledHeader>
    )
}

export default Header;