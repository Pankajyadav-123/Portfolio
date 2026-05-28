import React, { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext({
  toasts: [],
  toast: () => {},
  dismissToast: () => {},
});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((toastId) => {
    setToasts((current) => current.filter((toast) => toast.id !== toastId));
  }, []);

  const toast = useCallback(
    ({ title, description, action, variant = 'default', duration = 5000 }) => {
      const id =
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2, 11);

      const newToast = {
        id,
        title,
        description,
        action,
        variant,
        open: true,
        onOpenChange: (open) => {
          if (!open) {
            dismissToast(id);
          }
        },
      };

      setToasts((current) => [...current, newToast]);

      if (duration > 0) {
        window.setTimeout(() => {
          dismissToast(id);
        }, duration);
      }
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, toast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      toasts: [],
      toast: () => {},
      dismissToast: () => {},
    };
  }

  return context;
}
