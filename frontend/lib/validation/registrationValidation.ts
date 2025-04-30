import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    role: Yup.string().oneOf(['user', 'merchant'], 'Invalid role').required('Role is required'),
});
