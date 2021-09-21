import styled from "styled-components";

export const StyledSettingsModal = styled.div`
    position: fixed;
    right: 30px;
    top: 70px;
    width: 340px;
    height: fit-content;
    background-color: white;
    background-color: ${props => props.darkTheme ? '#333' : 'white'};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 5px 1px grey;
    border-radius: 10px;
    padding: 10px;
`;

export const StyledH2 = styled.h2`
    text-transform: capitalize;
    margin: 5px;
`;