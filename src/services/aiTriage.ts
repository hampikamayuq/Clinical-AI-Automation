export type TriageCategory =
  | "SCHEDULING"
  | "FOLLOW_UP"
  | "CLINICAL_REVIEW"
  | "BILLING"
  | "OTHER";

export interface TriageSuggestion {
  category: TriageCategory;
  confidence: number;
  rationale: string;
  requiresHumanReview: true;
}

/**
 * Mock AI adapter for portfolio demonstration.
 * In production, this would call an LLM with structured output,
 * redaction, logging, evaluation, and explicit human review.
 */
export function suggestOperationalTriage(message: string): TriageSuggestion {
  const normalized = message.toLowerCase();
  if (normalized.includes("appointment") || normalized.includes("schedule")) {
    return {
      category: "SCHEDULING",
      confidence: 0.86,
      rationale: "Scheduling intent detected from synthetic message text.",
      requiresHumanReview: true
    };
  }
  if (normalized.includes("result") || normalized.includes("biopsy")) {
    return {
      category: "CLINICAL_REVIEW",
      confidence: 0.82,
      rationale: "Potential clinical-result context detected; route to clinician review.",
      requiresHumanReview: true
    };
  }
  return {
    category: "OTHER",
    confidence: 0.55,
    rationale: "No high-confidence operational category detected.",
    requiresHumanReview: true
  };
}
