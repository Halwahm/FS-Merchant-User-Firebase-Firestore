import { FieldConfig } from "@/lib/types/forms";

export const registerFormFields: FieldConfig<{ email: string; password: string; phoneNumber: string; role: 'user' | 'merchant' }>[] = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { label: 'User', value: 'user' },
      { label: 'Merchant', value: 'merchant' },
    ],
  },
];
