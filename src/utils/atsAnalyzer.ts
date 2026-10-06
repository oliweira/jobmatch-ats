import type { AnalysisData } from '../types'; // ajuste o caminho correto se necessário

const STOP_WORDS = new Set([
  'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'com', 'não', 'uma',
  'os', 'no', 'se', 'na', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'ao', 'ele',
  'das', 'à', 'seu', 'sua', 'ou', 'quando', 'muito', 'nos', 'já', 'eu', 'também',
  'só', 'pelo', 'pela', 'até', 'isso', 'ela', 'entre', 'depois', 'sem', 'mesmo',
  'aos', 'seus', 'quem', 'nas', 'me', 'esse', 'eles', 'você', 'essa', 'num', 'nem',
  'suas', 'meu', 'às', 'minha', 'numa', 'pelos', 'elas', 'qual', 'nós', 'lhe',
  'deles', 'essas', 'esses', 'pelas', 'este', 'dele', 'tu', 'te', 'vocês', 'vos',
  'lhes', 'meus', 'minhas', 'teu', 'tua', 'teus', 'tuas', 'nosso', 'nossa', 'nossos',
  'nossas', 'dela', 'delas', 'esta', 'estes', 'estas', 'aquele', 'aquela', 'aqueles',
  'aquellas', 'isto', 'aquilo', 'estou', 'está', 'estamos', 'estão', 'estive', 'esteve',
  'estivemos', 'estiveram', 'estava', 'estávamos', 'estavam', 'estivera', 'estiveramos',
  'tenho', 'tem', 'temos', 'têm', 'tinha', 'tínhamos', 'tinham', 'tive', 'teve',
  'tivemos', 'tiveram', 'tivera', 'tiveramos', 'tenha', 'tenhamos', 'tenham',
  'tivesse', 'tivéssemos', 'tivessem', 'tiver', 'tivermos', 'tiverem', 'terei',
  'terá', 'teremos', 'terão', 'teria', 'teríamos', 'teriam', 'requisitos', 'desejável',
  'diferencial', 'responsabilidades', 'vaga', 'empresa', 'trabalhar'
]);

export function analyzeResume(jobDescription: string, resumeText: string): AnalysisData {
  const cleanText = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\sà-úÀ-Ú]/gi, ' ')
      .replace(/\s+/g, ' ');

  const extractKeywords = (text: string): string[] => {
    const words = cleanText(text).split(' ');
    const freqMap: Record<string, number> = {};

    words.forEach(word => {
      if (word.length > 2 && !STOP_WORDS.has(word) && isNaN(Number(word))) {
        freqMap[word] = (freqMap[word] || 0) + 1;
      }
    });

    return Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
  };

  const jobKeywords = extractKeywords(jobDescription);
  const resumeClean = cleanText(resumeText);

  const foundKeywords: string[] = [];
  const missingKeywords: string[] = [];

  jobKeywords.forEach(kw => {
    if (resumeClean.includes(kw)) {
      foundKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  });

  const total = jobKeywords.length || 1;
  const score = Math.round((foundKeywords.length / total) * 100);
  const jobTitle = jobDescription.split('\n')[0].substring(0, 40) || 'Vaga Alvo';

  return {
    score,
    foundKeywords: foundKeywords.slice(0, 15),
    missingKeywords: missingKeywords.slice(0, 15),
    jobTitle,
    originalResume: resumeText,
    jobDescription,
    optimizedContent: {
      summary: `Profissional com sólida aderência aos requisitos da vaga de ${jobTitle}. Experiência prática com foco na otimização de processos e entrega de resultados alinhados às necessidades técnicas exigidas.`,
      suggestedAdditions: missingKeywords.slice(0, 5)
    }
  };
}