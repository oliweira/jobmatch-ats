import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  onAnalyze: (jobText: string, resumeText: string) => void;
}

export const InputForm: React.FC<Props> = ({ onAnalyze }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobDescription.trim() && resumeText.trim()) {
      onAnalyze(jobDescription, resumeText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            1. Cole a Descrição da Vaga
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Cole aqui os requisitos e responsabilidades da vaga..."
            className="w-full h-64 p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
            required
          />
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            2. Cole o Seu Currículo Atual
          </label>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Cole o texto do seu currículo atual..."
            className="w-full h-64 p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
            required
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          <span>Analisar Match ATS</span>
        </button>
      </div>
    </form>
  );
};