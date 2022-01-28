import styled from "styled-components";
import device from "../../utils/style/devices";

export const ErrorDiv = styled.div`
    max-width: 80%;
    min-width: 8rem;
    background-color: var(--warning);
    padding: 0.35rem;
    margin: 0.5rem;
`;

export const SuccessDiv = styled.div`
    max-width: 80%;
    min-width: 8rem;
    background-color: var(--success);
    padding: 0.35rem;
    margin: 0.5rem auto;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20rem;
    margin: 0.2rem;
    padding: 0.35rem;
    margin: 0 auto;
`;

export const StyledLabel = styled.label`
    font-family: var(--base-font-family);
    font-size: 1.2rem;
    padding: 0.2rem;
`;

export const StyledInput = styled.input`
    font-family: var(--grey-2);
    font-size: 1.2rem;
    padding: 0.2rem;
    border: solid 1px var(--grey-1);
    border-radius: 0.3rem;
`;
