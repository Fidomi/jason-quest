import styled from "styled-components";
import device from "../../utils/style/devices";

export const BasicContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100vw;
    min-height: 100vh;
`;

export const Main = styled.div`
    margin-top: 50px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    x-overflow: hidden;
    @media ${device.tablet} {
        margin-top: 80px;
    }
`;
