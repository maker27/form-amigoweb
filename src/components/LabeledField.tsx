import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
    height: 20px;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    user-select: none;
`;

interface LabeledFieldProps {
    label: string;
    children: React.ReactNode;
}

const LabeledField: React.FC<LabeledFieldProps> = ({ label, children }) => {
    return (
        <label>
            <Label>{label}</Label>
            {children}
        </label>
    );
};

export default LabeledField;
