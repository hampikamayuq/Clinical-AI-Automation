import type { LeadStatus } from "./types.js";

const transitions: Record<LeadStatus, LeadStatus[]> = {
  NEW: ["CONTACTED", "SCHEDULING", "LOST"],
  CONTACTED: ["SCHEDULING", "LOST"],
  SCHEDULING: ["APPOINTMENT_CONFIRMED", "LOST"],
  APPOINTMENT_CONFIRMED: ["CHECKED_IN", "LOST"],
  CHECKED_IN: ["COMPLETED"],
  COMPLETED: [],
  LOST: []
};

export function canTransitionLead(from: LeadStatus, to: LeadStatus): boolean {
  return transitions[from].includes(to);
}

export function transitionLead(from: LeadStatus, to: LeadStatus): LeadStatus {
  if (!canTransitionLead(from, to)) {
    throw new Error(`Invalid lead transition: ${from} -> ${to}`);
  }
  return to;
}
