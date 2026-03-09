export type AppointmentStatus = 'AGENDADO' | 'CONFIRMADO' | 'EM_ATENDIMENTO' | 'FINALIZADO' | 'CANCELADO';

export interface Appointment {
  id: string;
  clientId: string;
  userId: string; // Consultor responsável
  scheduledAt: string; // Data e hora agendada
  status: AppointmentStatus;
  notes?: string; // Resumo do atendimento
  createdAt: string;
  updatedAt: string;
}