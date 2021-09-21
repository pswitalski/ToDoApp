import React, { useState } from "react";
import { StyledSearchBar, StyledButton, StyledInput } from "./SearchBar.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {

    const [isActive, setIsActive] = useState(false);

    const handleInputFocus = () => {
        setIsActive(true);
    }

    const handleInputBlur = () => {
        setIsActive(false);
    }

    return(
        <StyledSearchBar isActive={isActive} >
            <StyledButton isActive={isActive} >
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </StyledButton>
            <StyledInput isActive={isActive} onBlur={handleInputBlur} onFocus={handleInputFocus} placeholder="Wyszukaj..." ></StyledInput>
        </StyledSearchBar>
    )
}

export default SearchBar;