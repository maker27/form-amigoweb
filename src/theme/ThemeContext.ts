import { createContext } from 'react';
import { defaultTheme, ThemeEnum } from './themes';

interface ThemeContextProps {
    theme: ThemeEnum;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    toggleTheme: () => void 0
});

export default ThemeContext;
