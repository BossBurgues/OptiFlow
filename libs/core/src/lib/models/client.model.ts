export interface Client {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  document?: string; // CPF/CNPJ
  notes?: string; // Observações gerais da ótica
  createdAt: string;
  updatedAt: string;
}