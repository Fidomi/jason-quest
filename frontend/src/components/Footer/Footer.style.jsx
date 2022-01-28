import styled from "styled-components";
import device from "../../utils/style/devices";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: var(--black);
    flex-shrink: 0;
`;

export const CenterContainer = styled.div`
    width: 90vw;
    margin: 3rem auto;
    text-align: center;
    color: var(--grey-3);
    @media ${device.tablet} {
        width: 50vw;
    }
`;
