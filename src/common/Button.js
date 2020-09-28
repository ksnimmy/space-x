import styled, { css } from "styled-components";
const theme = {
    primaryColor: "#59a7287d",
    secondaryColor: "#fdd54f",
    activeColor: "#43a259f5"
};
const Button = styled.button`
    margin: 5px 8px;
    color: #000;
    background:  ${p => p.secondary ? theme.secondaryColor : theme.primaryColor};
    ${p => p.large ? css`
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
    `: css`
        padding: 5px 25px;
        border-radius: 2px;
        font-size: 12px;
    `}
    display: inline-block;
    border: none;

    &:disabled{
        background: #eee;
        color: #000;
    }
    &:active{
        background: ${p => theme.activeColor};
        color: #fff;
        outline: none;
    }
    &.active{
        background: ${p => theme.activeColor};
        outline: none;
        color: #fff;
    }
    &:focus{
        outline: none;
        background: ${p => theme.activeColor};
    }
`;

export { Button };