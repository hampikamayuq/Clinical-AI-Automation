export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "SCHEDULING"
  | "APPOINTMENT_CONFIRMED"
  | "CHECKED_IN"
  | "COMPLETED"
  | "LOST";

export interface Lead {
  id: string;
  status: LeadStatus;
  patientId?: string;
  externalAppointmentId?: string;
}

export type AppointmentStatus =
  | "SCHEDULED"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW";
