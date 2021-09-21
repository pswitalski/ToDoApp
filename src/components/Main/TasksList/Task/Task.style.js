import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    border-bottom: 1px solid grey;

    &:last-child {
        border-bottom: none;
    }
`;

export const StyledP = styled.p`
    height: 40px;
    line-height: 40px;
    flex-grow: 1;
    text-align: center;
    text-transform: capitalize;
`;

export const StyledButton = styled.button`
    width: 40px;
    cursor: pointer;
    background-color: transparent;
    border: none;
`;