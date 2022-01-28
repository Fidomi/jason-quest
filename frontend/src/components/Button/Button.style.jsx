import device from "../../utils/style/devices";
import styled from "styled-components";

const SIZE = {
    small: "padding: 0.5em 0.6em;",
    medium: "padding: 1em 1.3em;",
    large: "padding: 1.7em 2.4em;",
};

const THEME = {
    default: `
        color: "#fff";
        background: "var(--grey-1)";
        border: "1px solid var(--grey-1)";
    `,
    rounded: `color: var(--white);
        background-color: var(--grey-1);
        border: 1px solid var(--grey-1);
        border-radius: 2rem;
        transition: color 0.3s ease, background 0.3s ease;
        &:hover {
            color: var(--grey-1);
            background: var(--white);
        }`,
    roundedOutline: `color: var(--grey-1);
        background-color: var(--white);
        border: 1px solid var(--grey-2);
        border-radius: 2rem;
        transition: color 0.3s ease, background 0.3s ease;
        &:hover {
            color: var(--grey-1);
            background: var(--white);
        }
    
    `,
    disabled: `
        color: var(--grey-2);
        background: color(var(--grey-4) tint(40%);
        border-color: var(--grey-4);
        cursor: default;
    `,
};

export const StyledButton = styled.button`
    border: 0;
    outline: 0;
    display: block;
    font-family: var(--base-font-family);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    max-width: 16rem;
    ${(props) => {
        return SIZE[props.buttonSize];
    }};
    ${(props) => {
        return THEME[props.buttonTheme];
    }};
`;
