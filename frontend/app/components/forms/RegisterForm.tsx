import AbstractForm from '@/app/components/AbstractForm';
import { RegistrationFormData } from '@/lib/types/forms';
import { registrationValidationSchema } from '@/lib/validation/registrationValidation';
import { signUp } from '@/lib/services/authService';
import { AxiosError } from 'axios';
import { FormikHelpers } from 'formik';
import { registerFormFields } from '@/lib/constants/registerFormFields';

interface RegisterFormProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  const initialValues: RegistrationFormData = {
    email: '',
    password: '',
    phoneNumber: '',
    role: 'user',
  };

  const onSubmit = async (
    values: RegistrationFormData,
    actions: FormikHelpers<RegistrationFormData>
  ) => {
    try {
      await signUp(values);
      onSuccess();
    } catch (error) {
      actions.setSubmitting(false);

      if (error instanceof AxiosError && error.response?.data) {
        const errorData = error.response.data as { message: string[] };
      
        if (Array.isArray(errorData.message)) {
          const fieldErrorMapping: Record<string, keyof RegistrationFormData> = {
            email: 'email',
            password: 'password',
            phoneNumber: 'phoneNumber',
            role: 'role',
          };
      
          errorData.message.forEach((errorMessage) => {
            for (const [key, value] of Object.entries(fieldErrorMapping)) {
              if (errorMessage.includes(key)) {
                actions.setFieldError(value, errorMessage);
                break;
              }
            }
          });
        }
      } else {
        onError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <AbstractForm
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
      onSubmit={onSubmit}
      fields={registerFormFields}
      submitButtonText="Register"
    />
  );
};

export default RegisterForm;
