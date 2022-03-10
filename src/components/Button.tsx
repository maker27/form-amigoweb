import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    background: #0880ae;
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #ebf4f8;
    user-select: none;
`;

const ActiveButton = styled(BaseButton)`
    cursor: pointer;

    &:hover {
        box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
        border: 2px solid rgba(44, 39, 56, 0.86);
        box-shadow: 0 2px 4px rgba(44, 39, 56, 0.0001), 0 4px 8px rgba(44, 39, 56, 0.08);
    }
`;

const DisabledButton = styled(BaseButton)`
    background: #dbe2ea;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.08);
    color: #2c2738;
    mix-blend-mode: normal;
    opacity: 0.5;
`;

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
    return disabled ? <DisabledButton>{children}</DisabledButton> : <ActiveButton>{children}</ActiveButton>;
};

export default Button;
