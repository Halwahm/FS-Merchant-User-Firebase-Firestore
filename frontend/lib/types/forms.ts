export interface FieldConfig<T> {
    name: keyof T;
    label: string;
    type: string;
    options?: { label: string; value: string }[];
}

export interface RegistrationFormData {
    email: string;
    password: string;
    phoneNumber: string;
    role: 'user' | 'merchant';
}