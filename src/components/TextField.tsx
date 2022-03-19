import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from 'styled-components';
import LabeledField from './LabeledField';
import { focusNextFormElement, onEnterPress } from '../utils';

const Input = styled.input`
    width: 100%;
    height: 52px;
    padding: 16px 16px 15px 16px;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid #dbe2ea;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
        color: #7c9cbf;
    }

    &:focus,
    &:active {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.link};
    }
`;

const ErrorMessage = styled.div`
    margin-top: 8px;
    font-size: 14px;
    line-height: 18px;
    color: #ff7171;
`;

const StyledTextBlock = styled.div`
    width: 100%;
    height: 106px;
    margin: 7px 0;
`;

interface TextFieldProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    label: string;
    placeholder?: string;
    error?: string;
}

const TextField: React.FC<TextFieldProps> = ({ value, setValue, label, placeholder, error }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onKeyDown = useCallback(event => onEnterPress(event, () => focusNextFormElement(event)), []);

    return (
        <StyledTextBlock>
            <LabeledField label={label}>
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </LabeledField>
            <ErrorMessage>{error}</ErrorMessage>
        </StyledTextBlock>
    );
};

export default TextField;
