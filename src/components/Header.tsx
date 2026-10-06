import React from 'react';
import { FileSearch, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-600 rounded-lg text-white">
            <FileSearch className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">JobMatch ATS</h1>
            <p className="text-xs text-slate-500">Otimizador de Currículo para Sistemas ATS</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200 text-sm font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>Melhora a apresentação, sem inventar dados.</span>
        </div>
      </div>
    </header>
  );
};