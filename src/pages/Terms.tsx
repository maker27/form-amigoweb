import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Title from '../components/Title';
import Button from '../components/Button';

const TextBlock = styled.div`
    margin: 30px 5px;
`;

const Terms: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Title>Пользовательское соглашение</Title>
            <TextBlock>Свобода одного человека заканчивается там, где начинается свобода другого.</TextBlock>
            <Button onClick={() => navigate(-1)}>Назад</Button>
        </>
    );
};

export default Terms;
