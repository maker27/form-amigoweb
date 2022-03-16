import TextField from '../components/TextField';
import Select from '../components/Select';
import { languageOptions } from '../assets/constants';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import React, { useState } from 'react';
import useRegForm from '../hooks/useRegForm';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Title from '../components/Title';
import { useNavigate } from 'react-router';

const Subtitle = styled.div`
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 22px;
    color: #2c2738;
`;

const Link = styled(RouterLink)`
    &,
    &:visited {
        color: #0880ae;
        text-decoration: none;
    }
    &:hover {
        text-decoration: underline;
    }
`;

const RegForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(-1);
    const [isAcceptTerms, setIsAcceptTerms] = useState(false);
    const navigate = useNavigate();

    const { isValidForm, nameError, emailError, phoneError } = useRegForm(
        name,
        email,
        phone,
        languageOptions[selectedLanguage],
        isAcceptTerms
    );

    const onRegEnd = () => {
        navigate('/profile');
    };

    return (
        <>
            <Title>Регистрация</Title>
            <Subtitle>
                Уже есть аккаунт? <Link to="/auth">Войти</Link>
            </Subtitle>
            <TextField
                value={name}
                setValue={setName}
                label="Имя"
                placeholder="Введите Ваше имя"
                error={nameError}
            />
            <TextField
                value={email}
                setValue={setEmail}
                label="Email"
                placeholder="Введите email"
                error={emailError}
            />
            <TextField
                value={phone}
                setValue={setPhone}
                label="Номер телефона"
                placeholder="Введите номер телефона"
                error={phoneError}
            />
            <Select
                label="Язык"
                placeholder="Язык"
                options={languageOptions}
                value={selectedLanguage}
                setValue={setSelectedLanguage}
            />
            <Checkbox checked={isAcceptTerms} setChecked={setIsAcceptTerms}>
                Принимаю <Link to="/terms">условия</Link> использования
            </Checkbox>
            <Button disabled={!isValidForm} onClick={onRegEnd}>
                Зарегистрироваться
            </Button>
        </>
    );
};

export default RegForm;
