import styled from "styled-components";

export const StyledButton = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: ${props => props.secondary ? "#ff3232" : "#17bb17"};
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    cursor: pointer;
    margin: ${props => props.bottom ? 'auto auto 5px auto' : '5px'};
    outline: none;

    &:focus {
        box-shadow: 0 0 5px 1px grey;
    }
`;