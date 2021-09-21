import styled from "styled-components";

export const StyledApp = styled.div`
    background-color: ${props => props.darkTheme ? '#111' : 'white'};
    transition: background-color 0.2s linear;
    color: ${props => props.darkTheme ? 'white' : 'black'};

`;