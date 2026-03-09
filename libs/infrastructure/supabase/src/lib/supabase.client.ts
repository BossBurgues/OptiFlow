import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Função para garantir que lemos a variável certa dependendo de onde o código está a correr (Web ou Mobile)
const supabaseUrl = process.env['EXPO_PUBLIC_SUPABASE_URL'] || process.env['NG_APP_SUPABASE_URL'] || '';
const supabaseAnonKey = process.env['EXPO_PUBLIC_SUPABASE_ANON_KEY'] || process.env['NG_APP_SUPABASE_ANON_KEY'] || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Atenção: Credenciais do Supabase não encontradas nas variáveis de ambiente.');
}

// Cria uma instância única (Singleton) do cliente Supabase
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);