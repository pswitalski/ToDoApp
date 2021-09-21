import styled from "styled-components";

export const StyledSearchBar = styled.div`
    background-color: ${props => props.isActive ? "#fff": "#e0dada"};
    margin: 5px 10px;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: ${props => props.isActive ? "0 0 5px 1px grey": "none"};
    transition: background-color .3s linear;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    margin: 0 10px 0 5px;
    padding: 0 5px;
    border: none;
    background-color: ${props => props.isActive ? "#fff": "#e0dada"};
    outline: none;
    transition: background-color .3s linear;

    &::placeholder {
        color: grey
    }
`;

export const StyledButton = styled.button`
    width: 70px;
    height: 100%;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    transition: background-color .3s linear;
    background-color: ${props => props.isActive ? "#fff": "#e0dada"};`;