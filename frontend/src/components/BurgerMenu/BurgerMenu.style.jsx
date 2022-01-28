import device from "../../utils/style/devices";
import styled from "styled-components";

export const BurgerMenuWrapper = styled.div`
    height: 25px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    margin: var(--fontS);
    @media ${device.tablet} {
        display: none;
    }
`;

export const BurgerLine = styled.div`
    background-color: var(--grey-1);
    height: 4px;
    width: 32px;
    align-self: center;
    transition: all linear;

    &:first-child {
        transform: ${(props) =>
            props.open ? "rotate(45deg)" : "rotate(0deg)"};
        transform-origin: top left;
    }
    &:nth-child(2) {
        opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
        transform: ${(props) =>
            props.open ? "rotate(-45deg)" : "rotate(0deg)"};
        transform-origin: bottom left;
    }
`;

export const MenuWrapper = styled.div`
    @media ${device.tablet} {
        display: none;
    }
`;
