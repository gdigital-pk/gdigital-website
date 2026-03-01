"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

type ToastType = "success" | "error";

interface ToastContextProps {
  showToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<{ id: number; type: ToastType; message: string }[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000); 
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col items-end gap-2 pointer-events-none">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className={`flex items-center gap-2 px-4 py-2 rounded shadow text-white font-medium pointer-events-auto ${
        toast.type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {/* Icon */}
      {toast.type === "success" ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}

      {/* Message */}
      <span>{toast.message}</span>
    </div>
  ))}
</div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};