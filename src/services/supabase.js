import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pggjbzdzcgszhkdfxrri.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZ2piemR6Y2dzemhrZGZ4cnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDkxMDQsImV4cCI6MjA3Mzg4NTEwNH0.4YO3jnYIle-XQ0uVqFCAiFPLFgNMC0dqrZZ-cO_LEeo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
