
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ouhkqhncyltrmkvbajrs.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91aGtxaG5jeWx0cm1rdmJhanJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMzYyMzcsImV4cCI6MjAzNDcxMjIzN30.ujPC3Vl02ka8WzV2oU40kdHt9UEF6AtpCkDNcS80SSA
const supabase = createClient(supabaseUrl, supabaseKey)