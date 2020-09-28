import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/Global.style";
import { Spinner } from "../common/Spinner";

const Content = styled.div`
    background: #fff;
    & footer{
        font-size: 14px;
        width: 100%;
        position: fixed;
        bottom: 0;
        text-align: center;
        height: 30px;
        line-height: 30px;
        background: #b9dec1;
    }
    & .container{
        background: #f4f4f4;
        border: #ddd;
        max-width: 1440px;
    }
`;

export const PageContainer = ({ children }) => {
    return <div>
        <GlobalStyle />
        {/* <Spinner /> */}
        <Content>
            <header>
                {/* Nothing for now */}
            </header>
            <main className="container">
                {children}
            </main>
            <footer>
                Developed By :<strong> Nimmy Sambasivan</strong>
            </footer>
        </Content>
    </div>;
};