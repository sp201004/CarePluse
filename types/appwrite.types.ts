import { Models } from "node-appwrite";

export type Gender = "male" | "female" | "other";

export type Status = "schedule" | "pending" | "cancel";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
  timeZone?: string;
}

export interface CreateAppointmentParams {
  userId: string;
  patient: string;
  primaryPhysician: string;
  schedule: Date;
  reason: string;
  status: Status;
  note?: string;
}

export interface UpdateAppointmentParams {
  userId: string;
  appointmentId: string;
  appointment: {
    primaryPhysician: string;
    schedule: Date;
    status: Status;
    cancellationReason?: string;
    timeZone?: string;
  };
  type: "create" | "schedule" | "cancel";
}
