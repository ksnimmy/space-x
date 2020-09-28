import styled, {keyframes} from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(3600deg);
    }
`;

const Spinner = styled.div`
    height: 40px;
    width: 40px;
    border: 2px dotted #30c753;
    border-radius: 50%;
    border-top: none;
    border-right: none;
    animation: ${rotation} 8s linear infinite;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1000;
`;

export {Spinner};