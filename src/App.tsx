import React, { useState } from 'react';
import Button from './components/Button';
import TextField from './components/TextField';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import GlobalStyles from './styles';
import styled from 'styled-components';
import useRegForm from './hooks/useRegForm';
import { languageOptions } from './assets/constants';

const Container = styled.div`
    padding: 8.7% 6.52%;
    background: #ffffff;
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
`;

const Title = styled.h1`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 34px;
    line-height: 44px;
    color: #2c2738;
`;

const Subtitle = styled.div`
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 22px;
    color: #2c2738;
`;

const Link = styled.a`
    &,
    &:visited {
        color: #0880ae;
        text-decoration: none;
    }
    &:hover {
        text-decoration: underline;
    }
`;

const App: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(-1);
    const [isAcceptTerms, setIsAcceptTerms] = useState(false);

    const { isValidForm, nameError, emailError, phoneError } = useRegForm(
        name,
        email,
        phone,
        languageOptions[selectedLanguage],
        isAcceptTerms
    );

    return (
        <>
            <GlobalStyles />
            <Container>
                <Title>Регистрация</Title>
                <Subtitle>
                    Уже есть аккаунт? <Link href="#">Войти</Link>
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
                    placeholder="Введите ваш email"
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
                    Принимаю <Link href="#">условия</Link> использования
                </Checkbox>
                <Button disabled={!isValidForm}>Зарегистрироваться</Button>
            </Container>
        </>
    );
};

export default App;
