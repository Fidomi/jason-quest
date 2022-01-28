import device from "../../utils/style/devices";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSideMenu = styled.div`
    width: 100vw;
    height: 100vh;
    top: 40px;
    position: absolute;
    left: 0;
    display: inline;
    z-index: ${({ open }) => (open ? "1001" : "-100")};
    background: var(--color-fade);

    @media ${device.tablet} {
        width: 30vw;
        left: auto;
        right: 0;
        top: 4rem;
    }
`;

export const ColumContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SideMenuLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.6rem;
    margin: 0.2rem 0;
    border-bottom: solid var(--grey-1) 1px;
    color: ${(props) =>
        props.color ? `var(${props.color})` : "var(--grey-2)"};
`;
