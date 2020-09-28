import styled from 'styled-components'

export const MissionCardStyle = styled.div`
    text-align: center;
    background: #fff;
    border: 1px solid #f1efef;
    width: 175px;
    display: inline-block;
    margin: 0px 10px 10px 0px;

    & .program-card{
        font-size: 13px;
        width: 100%;
        padding: 10px;
    }

    & .image-box{
        text-align: center;
        width: 100%;
    }

    & .image-box img{
        width: 100%;
        height: 100%;
        background: #eae7e7;
        padding: 15px;
    }

    & .title{
        font-weight: bold;
        font-size: 1em;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: left;
        color: #0404ca;
    }
    & .description{
        text-align: left;
        height: 100px;
        overflow-y: auto;
    }
    & .description label{
        margin-bottom: 0px;
        color: #0404ca;
    }
    & .description p{
        margin-bottom: 0px;
    }
    & .mission-list{
        margin-left: 15px;
        margin-bottom: 0px;
    }
    @media (max-width:575px) {
        margin: 8px 0px;
    }
    @media (max-width:700px) {
        width: 275px;
        &:last-child{
            margin-bottom: 40px
        }
    }

    @media (max-width:1024px) and (min-width:700px) {
        margin: 0px;
        width: 275px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
    }

    @media (max-width:14400px) and (min-width:1024px) {
        width: 250px;
    }
`;