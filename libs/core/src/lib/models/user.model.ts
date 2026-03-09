export type UserRole = 'ADMIN' | 'CONSULTOR';

export interface UserProfile {
  id: string; // UUID vindo do Supabase Auth
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}