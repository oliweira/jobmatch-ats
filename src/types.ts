export interface AnalysisData {
  score: number;
  foundKeywords: string[];
  missingKeywords: string[];
  jobTitle: string;
  originalResume: string;
  jobDescription: string;
  optimizedContent: {
    summary: string;
    suggestedAdditions: string[];
  };
}