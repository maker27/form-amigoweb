import React from 'react';
import styled from 'styled-components';
import { onEnterPress } from '../utils';

const BaseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    background: ${({ theme }) => theme.colors.link};
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #ebf4f8;
    user-select: none;
`;

const ActiveButton = styled(BaseButton).attrs(() => ({ tabIndex: 0 }))`
    cursor: pointer;

    &:hover {
        box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
        border: 2px solid rgba(44, 39, 56, 0.86);
        box-shadow: 0 2px 4px rgba(44, 39, 56, 0.0001), 0 4px 8px rgba(44, 39, 56, 0.08);
    }
`;

export const DisabledButton = styled(BaseButton).attrs(() => ({ disabled: 'disabled' }))`
    background: ${({ theme }) => theme.colors.disabled};
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.08);
    color: ${({ theme }) => theme.colors.text};
    mix-blend-mode: normal;
    opacity: 0.5;
`;

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
    return disabled ? (
        <DisabledButton>{children}</DisabledButton>
    ) : (
        <ActiveButton onClick={onClick} onKeyDown={event => onEnterPress(event, onClick)}>
            {children}
        </ActiveButton>
    );
};

export default Button;
