import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2.5 max-w-md w-full px-4 no-print pointer-events-none">
      {toasts.map((t) => {
        const bgStyles =
          t.type === 'success'
            ? 'bg-emerald-800 text-emerald-50 border-emerald-700 shadow-emerald-950/30'
            : t.type === 'error'
            ? 'bg-rose-800 text-rose-50 border-rose-700 shadow-rose-950/30'
            : 'bg-slate-900 text-slate-50 border-slate-700 shadow-slate-950/30';

        const Icon =
          t.type === 'success' ? CheckCircle2 : t.type === 'error' ? AlertCircle : Info;

        return (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl border shadow-xl text-xs font-medium backdrop-blur-md transition transform duration-200 ${bgStyles}`}
          >
            <div className="flex items-center space-x-2.5">
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="leading-snug">{t.message}</span>
            </div>
            <button
              onClick={() => onDismiss(t.id)}
              className="ml-3 p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
