import styled from "styled-components";

export const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid gray;
    padding: 5px;
`;

export const StyledP = styled.p`
    border-bottom: 1px solid grey;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-transform: capitalize;

    &:last-child {
        border-bottom: none;
    }
`;

export const StyledH2 = styled.h2`
    margin: 5px;
`;