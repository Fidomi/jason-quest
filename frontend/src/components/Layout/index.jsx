import React from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { BasicContainer, Main } from "./Layout.style";

const BasicLayout = (props) => {
    const HEADER_PATHES = [
        ["QUESTIONS", "/questions"],
        ["RÉSULTATS", "/resultats"],
        ["ACCUEIL", "/"],
    ];
    return (
        <BasicContainer>
            <Header pathes={HEADER_PATHES} />
            <Main>{props.children}</Main>
            <Footer />
        </BasicContainer>
    );
};

export default BasicLayout;
