import { useState } from 'react';

const useNotification = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  const show = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return {
    showNotification,
    notificationMessage,
    show,
  };
};

export default useNotification;
