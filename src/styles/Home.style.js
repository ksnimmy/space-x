import styled from "styled-components";
export const HomeStyle = styled.div`
    & h1{
        font-size: 1.2em;
        text-align: center;
        padding: 5px 15px
    }
    & .program-container{
        text-align: center;
        margin-top: 10px;
    }
    @media(min-width: 700px){
        & .program-container{
            margin-top: 0px;
            margin-bottom: 40px;
            text-align: left;
        }
    }
    @media (min-width:575px){
        & .program-container{
            margin-top: 0px;
        }
    }
`;