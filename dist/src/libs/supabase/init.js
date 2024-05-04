"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = (0, supabase_js_1.createClient)(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);
module.exports = supabase;
//# sourceMappingURL=init.js.map