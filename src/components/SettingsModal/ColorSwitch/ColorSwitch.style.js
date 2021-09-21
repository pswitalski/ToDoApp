import styled from "styled-components";

export const StyledColorSwitch = styled.div`
    margin: 10px;
    width: 200px;
    height: 50px;
    border-radius: 12px;
    border: 1px solid black;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

export const StyledLeftContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: white;
`;

export const StyledRightContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: white;
`;

export const StyledMarker = styled.div`
    position: absolute;
    left: 0;
    transform: ${props => props.darkTheme ? 'translateX(100%)' : 'translateX(0)'};
    top: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(90, 90, 90, 0.5);
    z-index: 1;
    transition: transform 0.2s linear;
`;

export const StyledP = styled.p`
    z-index: 2;
    line-height: 50px;
    width: 100%;
    text-align: center;
`;