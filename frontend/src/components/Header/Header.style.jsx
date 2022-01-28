import styled from "styled-components";
import device from "../../utils/style/devices";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: fixed;
    background-color: var(--white);
    index: 1000;
    filter: drop-shadow(0 0.2rem 0.25rem var(--grey-4));
    @media ${device.tablet} {
        height: 80px;
    }
    @media ${device.laptopL} {
        height: 95px;
    }
`;

const StyledHeader = styled.header`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    @media ${device.tablet} {
        height: 100%;
        padding: 1rem 1.2rem;
        max-width: 1600px;
    }
`;

export const NavContainer = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
    }
`;

export default StyledHeader;
