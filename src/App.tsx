import React from 'react';
import { BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router';
import RegForm from './pages/RegForm';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import AuthForm from './pages/AuthForm';
import AppContainer from './containers/AppContainer';

const App: React.FC = () => {
    return (
        <AppContainer>
            <Router>
                <Routes>
                    <Route path="/form-amigoweb">
                        <Route path="" element={<RegForm />} />
                        <Route path="auth" element={<AuthForm />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="terms" element={<Terms />} />
                    </Route>
                    <Route path="*" element={<Navigate replace to="/form-amigoweb" />} />
                </Routes>
            </Router>
        </AppContainer>
    );
};

export default App;
