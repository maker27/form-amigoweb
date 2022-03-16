import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegForm from './RegForm';
import { MemoryRouter } from 'react-router';
import { languageOptions } from '../assets/constants';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));

interface FormProps {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    language: HTMLLabelElement;
    termsCheckbox: HTMLInputElement;
    button: HTMLDivElement;
}

describe('RegForm', () => {
    let form: FormProps | null = null;

    beforeEach(() => {
        render(
            <MemoryRouter>
                <RegForm />
            </MemoryRouter>
        );
        form = {
            name: screen.getByLabelText('Имя'),
            email: screen.getByLabelText('Email'),
            phone: screen.getByLabelText('Номер телефона'),
            language: screen.getByText('Язык'),
            termsCheckbox: screen.getByLabelText('Принимаю условия использования'),
            button: screen.getByText('Зарегистрироваться')
        };
    });

    test('checks availability of form elements', () => {
        expect(screen.getByRole('heading', { name: /регистрация/i })).toBeVisible();
        expect(form).toBeTruthy();
        if (form) {
            expect(form.name).toBeVisible();
            expect(form.email).toBeVisible();
            expect(form.phone).toBeVisible();
            expect(form.language).toBeVisible();
            expect(form.termsCheckbox).not.toBeVisible();
            expect(form.button).toBeVisible();
            expect(form.button).toHaveAttribute('disabled');
        }
    });

    test('tests form validating', () => {
        const textValues = {
            name: 'Name Surname-SecondSurname',
            email: 'test-login@domain.zn',
            phone: '+7(987)-654-32-10'
        };
        const selectedItemIndex = 2;
        expect(form).toBeTruthy();
        if (form) {
            userEvent.type(
                form.name,
                [
                    ...Object.values(textValues),
                    '{ArrowDown}'.repeat(selectedItemIndex + 1),
                    '{space}',
                    ''
                ].join('{enter}')
            );
            expect(form.name.value).toBe(textValues.name);
            expect(form.email.value).toBe(textValues.email);
            expect(form.phone.value).toBe(textValues.phone);

            const getErrorText = (node: HTMLInputElement) =>
                node.closest('label')?.nextSibling?.textContent ?? 'Node not found';
            expect(getErrorText(form.name)).toBe('');
            expect(getErrorText(form.email)).toBe('');
            expect(getErrorText(form.phone)).toBe('');

            expect(form.language.nextSibling?.textContent).toBe(languageOptions[selectedItemIndex]);
            expect(form.termsCheckbox).toBeChecked();

            const activeButton = screen.getByText('Зарегистрироваться');
            expect(activeButton).not.toHaveAttribute('disabled');

            userEvent.click(activeButton);
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
            expect(mockedUsedNavigate).toHaveBeenCalledWith('../profile');
        }
    });
});
