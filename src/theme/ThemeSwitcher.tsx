import React, { useContext } from 'react';
import styled from 'styled-components';
import dayIcon from '../images/day.svg';
import nightIcon from '../images/night.svg';
import { ThemeEnum } from './themes';
import ThemeContext from './ThemeContext';

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 34px;
    transition: 0.4s;

    &&::before {
        position: absolute;
        content: '';
        height: 40px;
        width: 40px;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
        transition: 0.4s;
        box-shadow: 0 0 15px #20203d;
        border-radius: 50%;
        background: url(${nightIcon}) center/70% auto no-repeat white;
    }
`;

const Switcher = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    && input {
        opacity: 0;
        width: 0;
        height: 0;

        &:focus + ${Slider} {
            box-shadow: 0 0 1px ${({ theme }) => theme.colors.link};
        }
        &:checked + ${Slider} {
            background-color: ${({ theme }) => theme.colors.link};
        }
        &:not(:checked) + ${Slider}:before {
            background-color: #121212;
            box-shadow: 0 0 15px #a0a09d;
        }
        &:checked + ${Slider}:before {
            transform: translateX(24px);
            background-image: url(${dayIcon});
        }
    }
`;

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Switcher>
            <input type="checkbox" onChange={toggleTheme} checked={theme === ThemeEnum.light} />
            <Slider />
        </Switcher>
    );
};

export default ThemeSwitcher;
