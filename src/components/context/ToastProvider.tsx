import { createContext, useState } from "react";

interface PropType {
  children: JSX.Element;
}

export const ToastContext = createContext("");

const ToastProvider = ({ children }: PropType) => {
  const [toast, setToast] = useState<string>("");

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
