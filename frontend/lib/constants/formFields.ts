import { LoginFormData } from "@/lib/types/auth";

type LoginFormField = {
    name: keyof LoginFormData;
    label: string;
    type: string;
};

export const loginFormFields: LoginFormField[] = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
];
