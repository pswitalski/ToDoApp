import React, { useState, useRef } from "react";
import { StyledSearchBar, StyledButton, StyledInput } from "./SearchBar.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({handleSearch}) {


    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleInputFocus = () => {
        setIsActive(true);
    }

    const handleInputBlur = () => {
        setIsActive(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        handleSearch(e.target.value);
    }

    const inputElement = useRef();

    const handleSearchButton = () => {
        inputElement.current.focus();
    }

    return(
        <StyledSearchBar isActive={isActive} >
            <StyledButton onClick={handleSearchButton} isActive={isActive} >
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </StyledButton>
            <StyledInput ref={inputElement} value={inputValue} onChange={handleInputChange} isActive={isActive} onBlur={handleInputBlur} onFocus={handleInputFocus} placeholder="Search task..." ></StyledInput>
        </StyledSearchBar>
    )
}

export default SearchBar;