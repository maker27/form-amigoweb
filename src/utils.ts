import React from 'react';

type ValidatorFunction = (value: string) => string;

export const nameValidator: ValidatorFunction = value =>
    !value || /^[A-zА-я -]+$/.test(value) ? '' : 'Только буквы, пробел и дефис';

export const emailValidator: ValidatorFunction = value =>
    !value || /^[a-z0-9-_]+@[a-z0-9]+\.[a-z]{2,3}$/.test(value) ? '' : 'Некорректный email-адрес';

export const phoneValidator: ValidatorFunction = value =>
    !value || /^\d{0,11}$/.test(value.replace(/[()+-]*/g, '')) ? '' : 'Некорректный номер телефона';

export function getFocusableElements(element = document): Element[] {
    const isVisibleElement = (node: HTMLElement) => getComputedStyle(node).display !== 'none';
    return Array.from(
        element.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
    ).filter(
        node =>
            !node.hasAttribute('disabled') &&
            !node.getAttribute('aria-hidden') &&
            isVisibleElement(node as HTMLElement)
    );
}

export function focusNextFormElement(event: React.KeyboardEvent<HTMLElement>): void {
    const target = event.target as HTMLFormElement;
    const form = target.form;
    const focusableElements = getFocusableElements(form).filter(({ tagName }) => tagName !== 'A');
    const index = focusableElements.indexOf(target);
    (focusableElements[index + 1] as HTMLFormElement)?.focus?.();
    event.preventDefault();
}

export function onEnterPress(event: React.KeyboardEvent<HTMLElement>, callback?: () => void): void {
    if ((event.key || event.code) === 'Enter' && typeof callback === 'function') callback();
}
