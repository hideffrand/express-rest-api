import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL as string;
const SUPABASE_API_KEY = process.env.SUPABASE_ANON_KEY as string;

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

module.exports = supabase;
