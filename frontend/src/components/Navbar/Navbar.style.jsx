import styled from "styled-components";
import device from "../../utils/style/devices";

export const ContainerNavBar = styled.nav`
    display: flex;
    flex-flow: column no-wrap;
    @media ${device.tablet} {
        flex-flow: row no-wrap;
        justify-content: space-between;
        & > * {
            padding-left: 2em;
        }
    }
`;
