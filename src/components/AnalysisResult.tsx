import React from 'react';
import type { AnalysisData } from '../types'; // ajuste o caminho correto se necessário
import { CheckCircle2, XCircle, Percent } from 'lucide-react';

interface Props {
  data: AnalysisData;
}

export const AnalysisResult: React.FC<Props> = ({ data }) => {
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 50) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border bg-slate-50">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Resultado da Compatibilidade ATS</h3>
          <p className="text-sm text-slate-500">Baseado nos termos-chave extraídos da vaga</p>
        </div>
        <div className={`mt-4 sm:mt-0 px-6 py-3 rounded-xl border flex items-center space-x-2 ${getScoreColor(data.score)}`}>
          <Percent className="w-6 h-6" />
          <span className="text-3xl font-black">{data.score}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border border-emerald-100 bg-emerald-50/50">
          <h4 className="flex items-center space-x-2 font-semibold text-emerald-800 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Palavras-chave Encontradas ({data.foundKeywords.length})</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.foundKeywords.map((kw, idx) => (
              <span key={idx} className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-md font-medium">
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-rose-100 bg-rose-50/50">
          <h4 className="flex items-center space-x-2 font-semibold text-rose-800 mb-3">
            <XCircle className="w-5 h-5 text-rose-600" />
            <span>Palavras-chave Ausentes ({data.missingKeywords.length})</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.missingKeywords.map((kw, idx) => (
              <span key={idx} className="bg-rose-100 text-rose-800 text-xs px-2.5 py-1 rounded-md font-medium">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};