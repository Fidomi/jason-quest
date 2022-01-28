import React from "react";
import { FooterContainer, CenterContainer } from "./Footer.style";

const Footer = ({ pathes }) => {
    return (
        <FooterContainer>
            <CenterContainer>
                <p>
                    Ce site est un exercice dans le cadre de la Wild School
                    Academy
                </p>
                <p>© {new Date().getFullYear()} Jason et les Argonautes</p>
            </CenterContainer>
        </FooterContainer>
    );
};

export default Footer;
