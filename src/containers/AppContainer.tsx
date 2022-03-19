import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles';
import Theme from '../theme';

const Container = styled.div`
    min-height: 100%;
    padding: 8.7% 6.52%;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
`;

const ThemeSwitcherWrapper = styled.div`
    position: fixed;
    top: 15px;
    right: 15px;
`;

const AppContainer: React.FC = ({ children }) => {
    return (
        <Theme.Wrapper>
            <GlobalStyles />
            <Container>
                <ThemeSwitcherWrapper>
                    <Theme.Switcher />
                </ThemeSwitcherWrapper>
                {children}
            </Container>
        </Theme.Wrapper>
    );
};

export default AppContainer;
