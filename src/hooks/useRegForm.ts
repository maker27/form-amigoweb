import { emailValidator, nameValidator, phoneValidator } from '../utils';

interface useFormResult {
    isValidForm: boolean;
    nameError: string;
    emailError: string;
    phoneError: string;
}

export default function useRegForm(
    name: string,
    email: string,
    phone: string,
    language?: string,
    isAcceptTerms?: boolean
): useFormResult {
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const phoneError = phoneValidator(phone);
    const isValidForm = Boolean(
        name && !nameError && email && !emailError && phone && !phoneError && language && isAcceptTerms
    );
    return { isValidForm, nameError, emailError, phoneError };
}
