import React from 'react';
import styled from 'styled-components';
import checkboxIcon from '../images/checkbox.svg';

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
}

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
    return (
        <CheckboxContainer>
            <label>
                <CheckboxInput />
                <CheckboxLabel>{children}</CheckboxLabel>
            </label>
        </CheckboxContainer>
    );
};

export default Checkbox;
