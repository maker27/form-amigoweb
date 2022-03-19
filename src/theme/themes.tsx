import { DefaultTheme } from 'styled-components';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark'
}

const baseTheme = {
    colors: {
        bg: '#ffffff',
        text: '#2c2738',

        body: '#e5e5e5',
        label: '#756F86',
        link: '#0880ae',
        disabled: '#dbe2ea'
    }
};

export type ThemeType = typeof baseTheme;

const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light
};

const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        bg: '#000000',
        text: '#f0e7fe',

        body: '#393939',
        label: '#9992a9',
        link: '#3e9bc9',
        disabled: '#1f2225'
    }
};

export const defaultTheme = ThemeEnum.light;

export default {
    [ThemeEnum.light]: lightTheme,
    [ThemeEnum.dark]: darkTheme
};
