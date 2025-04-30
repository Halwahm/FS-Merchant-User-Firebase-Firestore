import AbstractForm from "@/app/components/AbstractForm";
import { LoginFormData } from "@/lib/types/auth";
import { loginValidationSchema } from "@/lib/validation/loginValidation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { setAuthTokenId } from "@/lib/utils/cookie";
import { AxiosError } from "axios";
import { FormikHelpers } from "formik";
import { loginFormFields } from "@/lib/constants/formFields";

interface BackendErrorResponse {
  message: string[];
}

interface LoginFormProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onError }) => {
  const initialValues: LoginFormData = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: LoginFormData,
    actions: FormikHelpers<LoginFormData>
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;
      const tokenId = await user.getIdToken();

      if (!tokenId) {
        throw new Error("Token is undefined. Please verify server response.");
      }

      setAuthTokenId(tokenId);
      onSuccess();
    } catch (error) {
      actions.setSubmitting(false);

      if (error instanceof AxiosError && error.response?.data) {
        const errorData = error.response.data as BackendErrorResponse;
      
        if (Array.isArray(errorData.message)) {
          const fieldMap: Record<string, keyof LoginFormData> = {
            email: "email",
            password: "password",
          };
      
          errorData.message.forEach((errorMessage) => {
            for (const key in fieldMap) {
              if (errorMessage.includes(key)) {
                actions.setFieldError(fieldMap[key], errorMessage);
                break;
              }
            }
          });
        }
      } else {
        onError("Login failed. Please try again.");
      }
    }
  };

  return (
    <AbstractForm
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
      fields={loginFormFields}
      submitButtonText="Sign In"
    />
  );
};

export default LoginForm;
