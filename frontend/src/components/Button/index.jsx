import { StyledButton } from "./Button.style";

export const ButtonType = {
    BUTTON: "button",
    RESET: "reset",
    SUBMIT: "submit",
};

const Button = (props) => {
    const {
        type,
        buttonTheme,
        buttonSize = "medium",
        disabled = false,
        onClick,
        children,
    } = props;

    return (
        <StyledButton
            type={type}
            onClick={onClick}
            buttonTheme={buttonTheme}
            buttonSize={buttonSize}
            disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;
