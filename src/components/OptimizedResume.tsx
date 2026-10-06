import React from 'react';
// Se você está importando apenas tipos daquele arquivo/pacote:
import type { AnalysisData } from '../types'; // ajuste o caminho correto se necessário

import { exportToPDF, exportToDocx } from '../utils/exporters';
import { Download, FileText, Info } from 'lucide-react';

interface Props {
  data: AnalysisData;
}

export const OptimizedResume: React.FC<Props> = ({ data }) => {
  const fullOptimizedText = `RESUMO PROFISSIONAL:\n${data.optimizedContent.summary}\n\nSUGESTÃO DE TERMOS CHAVE A INCORPORAR (Apenas se possuir a vivência):\n${data.optimizedContent.suggestedAdditions.join(', ')}\n\nCURRÍCULO BASE:\n${data.originalResume}`;

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Versão Otimizada (ATS Friendly)</h3>
          <p className="text-sm text-slate-500">Pronta para exportação com os termos ajustados</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => exportToPDF('resume-preview', 'curriculo-ats-friendly')}
            className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>PDF</span>
          </button>
          <button
            onClick={() => exportToDocx('Currículo Otimizado ATS', fullOptimizedText, 'curriculo-ats-friendly')}
            className="flex items-center space-x-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>DOCX</span>
          </button>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3.5 rounded-lg flex items-start space-x-2">
        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Lembre-se:</strong> Adicione os termos sugeridos ao seu currículo apenas se tiver experiência real com eles.
        </span>
      </div>

      <div id="resume-preview" className="p-6 bg-slate-50 rounded-lg border border-slate-200 text-sm leading-relaxed font-sans text-slate-800 space-y-4">
        <div>
          <h4 className="font-bold text-brand-700 uppercase tracking-wide border-b border-slate-300 pb-1 mb-2">Resumo Profissional Ajustado</h4>
          <p className="text-slate-700">{data.optimizedContent.summary}</p>
        </div>

        {data.optimizedContent.suggestedAdditions.length > 0 && (
          <div>
            <h4 className="font-bold text-brand-700 uppercase tracking-wide border-b border-slate-300 pb-1 mb-2">Termos-chave Recomendados para Destacar</h4>
            <p className="text-slate-600 text-xs italic mb-1">Insira os termos abaixo no corpo do seu currículo onde couber:</p>
            <ul className="list-disc list-inside text-slate-700">
              {data.optimizedContent.suggestedAdditions.map((term, i) => (
                <li key={i} className="capitalize">{term}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-bold text-brand-700 uppercase tracking-wide border-b border-slate-300 pb-1 mb-2">Conteúdo do Currículo</h4>
          <pre className="whitespace-pre-wrap font-sans text-slate-700">{data.originalResume}</pre>
        </div>
      </div>
    </div>
  );
};