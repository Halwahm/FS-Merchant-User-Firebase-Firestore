"use client";

import { useRouter } from 'next/navigation';
import useNotification from '@/lib/hooks/useNotification';
import Notification from '@/app/components/Notification';
import RegisterForm from '@/app/components/forms/RegisterForm';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const { showNotification, notificationMessage, show } = useNotification();

  const handleSuccess = () => {
    show('Registration successful! Redirecting to login page...');
    setTimeout(() => {
      router.push('/auth/login');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {showNotification && <Notification message={notificationMessage} />}
      <RegisterForm onSuccess={handleSuccess} onError={show} />
    </div>
  );
};

export default RegisterPage;
