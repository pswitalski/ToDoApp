import React from "react";

import { StyledHeader } from "./Header.styles";

import Logo from "./Logo/Logo";
import Controls from "./Controls/Controls";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
    return(
        <StyledHeader>
            <Logo />
            <SearchBar />
            <Controls />
        </StyledHeader>
    )
}

export default Header;