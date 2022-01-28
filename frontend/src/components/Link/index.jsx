import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.4rem;
    margin: 0.2rem 0;
    color: ${(props) =>
        props.color ? `var(${props.color})` : "var(--grey-2)"};
`;

const CustomLink = (props) => {
    return (
        <StyledLink to={props.path} color={props.color}>
            {props.children}
        </StyledLink>
    );
};

export default CustomLink;
