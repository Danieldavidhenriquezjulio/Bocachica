// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Vite inyecta estas vars en import.meta.env
const SUPABASE_URL    = import.meta.env.VITE_SUPABASE_URL  as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Aquí compruebas en la consola del navegador
console.log('VITE_SUPABASE_URL →', SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY →', SUPABASE_ANON_KEY);

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
