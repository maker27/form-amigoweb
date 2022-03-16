import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import checkboxIcon from '../images/checkbox.svg';
import { focusNextFormElement, onEnterPress } from '../utils';

const CheckboxContainer = styled.div`
    margin: 32px 0 36px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

const CheckboxLabel = styled.span`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    white-space: pre-wrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    user-select: none;
    cursor: pointer;

    &::before {
        content: '';
        width: 28px;
        height: 28px;
        background: #ffffff;
        border: 1px solid #dbe2ea;
        box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 4px;
        margin-right: 8px;
    }

    ${CheckboxInput}:checked + &::before {
        border: 2px solid #0880ae;
        background: url(${checkboxIcon}) center no-repeat;
    }
`;

interface CheckboxProps {
    children: React.ReactNode;
    checked?: boolean;
    setChecked: Dispatch<SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, checked, setChecked }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
        if ((event.target as HTMLElement).tagName === 'LABEL') {
            if (event.code === 'Space') {
                setChecked(prevState => !prevState);
            } else {
                onEnterPress(event, () => focusNextFormElement(event));
            }
        }
    };

    return (
        <CheckboxContainer>
            <label tabIndex={0} onKeyDown={onKeyDown}>
                <CheckboxInput checked={checked} onChange={onChange} />
                <CheckboxLabel>{children}</CheckboxLabel>
            </label>
        </CheckboxContainer>
    );
};

export default Checkbox;
