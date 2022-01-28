import { useField } from "formik";
import React from "react";
import {
    ErrorDiv,
    InputBox,
    StyledLabel,
    StyledInput,
} from "./FormikInputs.style";

export const InputField = (props) => {
    const [field, meta] = useField({
        name: props.name,
        type: props.type,
    });
    return (
        <InputBox>
            <StyledLabel htmlFor={props.id || props.name}>
                {props.label}
            </StyledLabel>
            <StyledInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorDiv>{meta.error}</ErrorDiv>
            ) : null}
        </InputBox>
    );
};

export const MyRadiobox = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <InputBox>
            <StyledLabel htmlFor={props.id}>
                {label}
                <input {...field} {...props} />
            </StyledLabel>
            {meta.touched && meta.error ? (
                <ErrorDiv>{meta.error}</ErrorDiv>
            ) : null}
        </InputBox>
    );
};

export const MySelect = (props) => {
    const [field, meta] = useField(props);
    return (
        <InputBox>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select {...field} />
            {meta.touched && meta.error ? (
                <ErrorDiv>{meta.error}</ErrorDiv>
            ) : null}
        </InputBox>
    );
};
