import React from "react";
import ToastShelf from "../ToastShelf";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);

  const addToast = React.useCallback(
    (message, variant) => {
      const toast = {
        id: crypto.randomUUID(),
        variant,
        message,
      };

      const nextMessages = [...toastMessages];
      nextMessages.push(toast);

      setToastMessages(nextMessages);
    },
    [toastMessages]
  );

  const dismissToast = React.useCallback(
    (id) => {
      const messages = [...toastMessages];
      const nextMessages = messages.filter((message) => message.id !== id);

      setToastMessages(nextMessages);
    },
    [toastMessages]
  );

  function clearToast() {
    setToastMessages([]);
  }

  useEscapeKey(() => {
    clearToast();
  });

  return (
    <ToastContext.Provider value={{ addToast, dismissToast }}>
      <ToastShelf messages={toastMessages} />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
