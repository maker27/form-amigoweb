type ValidatorFunction = (value: string) => string;

export const nameValidator: ValidatorFunction = value =>
    !value || /^[A-zА-я -]+$/.test(value) ? '' : 'Только буквы, пробел и дефис';

export const emailValidator: ValidatorFunction = value =>
    !value || /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/.test(value) ? '' : 'Некорректный email-адрес';

export const phoneValidator: ValidatorFunction = value =>
    !value || /^\d{0,11}$/.test(value.replace(/[()+-]*/g, '')) ? '' : 'Некорректный номер телефона';
