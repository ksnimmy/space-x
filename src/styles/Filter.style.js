import styled from "styled-components";

export const FilterStyle = styled.div`
    background: #fff;
    border: 1px solid #f1efef;
    padding: 10px;
    margin: 0 auto;   
    width: 275px;
    & h3{
        font-size: 1em;
        font-weight: 500;
    }
    & h4{
        font-size: .8em;
        font-weight: 600;
    }
    & .criteria{
        text-align: center;
    }
    & .criteria h4{
        display: inline;
        border-bottom-style: solid;
        border-bottom-color: #000;
        border-bottom-width: 1px;
        text-align: center;
    }
    & button{
        margin: 5px 20px;
    }
    & a.btn-reset-filter{
        font-size: 14px;
    }
    @media (min-width:700px) and (max-width:900px) {
        width: 250px;
        & button{
            margin: 5px 10px;
        }
    }
    @media (min-width:900px) and (max-width:1440px) {
        width: 250px;
        & button{
            margin: 5px 15px;
        }
    }
`;