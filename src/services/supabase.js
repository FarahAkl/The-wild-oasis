import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qfxgbrupenyiehiehgnh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmeGdicnVwZW55aWVoaWVoZ25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NTI1MzAsImV4cCI6MjA3NTQyODUzMH0.ko17_sIle_Oca4yv0gQG5N83FURNkx9zPCJxCN8D_tU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
