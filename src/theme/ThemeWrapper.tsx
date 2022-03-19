import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import themes, { defaultTheme, ThemeEnum } from './themes';

const ThemeWrapper: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeWrapper;
