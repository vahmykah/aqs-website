import { createClient } from '@supabase/supabase-js';

const initializeSupabase = () => {
  const supabaseUrl = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL || 'https://dummy.supabase.co';
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'dummy';
  
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
    // Prevent Realtime from attempting connections during SSR/build
    realtime: {
      params: {
        eventsPerSecond: 0
      }
    }
  });
};

let _client: any = null;

// Lazy-loaded proxy: createClient is only called when a property is accessed, 
// completely preventing connection attempts on module load during Vercel builds.
export const supabase = new Proxy({}, {
  get: (target, prop) => {
    if (!_client) {
      _client = initializeSupabase();
    }
    return _client[prop];
  }
}) as ReturnType<typeof createClient>;
