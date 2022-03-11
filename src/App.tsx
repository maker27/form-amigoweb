import React from 'react';
import GlobalStyles from './styles';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import RegForm from './pages/RegForm';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import AuthForm from './pages/AuthForm';

const Container = styled.div`
    min-height: 100%;
    padding: 8.7% 6.52%;
    background: #ffffff;
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Router basename="/form-amigoweb">
                    <Routes>
                        <Route path="/" element={<RegForm />} />
                        <Route path="/auth" element={<AuthForm />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/terms" element={<Terms />} />
                    </Routes>
                </Router>
            </Container>
        </>
    );
};

export default App;
