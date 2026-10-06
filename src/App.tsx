import { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { AnalysisResult } from './components/AnalysisResult';
import { OptimizedResume } from './components/OptimizedResume';
import { analyzeResume } from './utils/atsAnalyzer';
import type { AnalysisData } from './types';

export function App() {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  const handleAnalyze = (jobText: string, resumeText: string) => {
    const result = analyzeResume(jobText, resumeText);
    setAnalysisData(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-8">
        <InputForm onAnalyze={handleAnalyze} />
        
        {analysisData && (
          <div className="space-y-8 animate-fadeIn">
            <AnalysisResult data={analysisData} />
            <OptimizedResume data={analysisData} />
          </div>
        )}
      </main>
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        JobMatch ATS — Otimizador de Currículos
      </footer>
    </div>
  );
}

export default App;