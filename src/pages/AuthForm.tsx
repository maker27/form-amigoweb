import React, { useState } from 'react';
import TextField from '../components/TextField';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const AuthForm: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/profile');
    };

    return (
        <>
            <Title>Вход</Title>
            <TextField value={login} setValue={setLogin} label="Логин" placeholder="Введите Ваш логин" />
            <TextField value={password} setValue={setPassword} label="Пароль" placeholder="Введите пароль" />
            <Button onClick={onSubmit}>Войти</Button>
        </>
    );
};

export default AuthForm;
