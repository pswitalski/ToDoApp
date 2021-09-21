import styled from "styled-components";

export const StyledAddTask = styled.form`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.darkTheme ? '#333' : 'white'};
    right: 30px;
    top: 70px;
    width: 340px;
    height: fit-content;
    box-shadow: 0 0 5px 1px grey;
    border-radius: 10px;
    padding: 10px;
`;

export const StyledInput = styled.input`
    width: 120px;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 10px;
    width: 100%;
    margin: 5px;
    outline: none;
    background-color: #e9e9e9;

    &:focus {
        box-shadow: 0 0 5px 1px grey;
    }
`;

export const StyledH2 = styled.h2`
    text-transform: capitalize;
    margin: 5px;
`;

export const StyledLabel = styled.label``;