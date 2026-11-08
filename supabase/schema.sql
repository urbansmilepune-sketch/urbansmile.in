-- Run this once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null default 'appointment' check (type in ('appointment', 'contact')),
  name text not null,
  phone text not null,
  email text,
  treatment text,
  preferred_date date,
  preferred_time text,
  message text,
  source_page text,
  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'done', 'spam'))
);

create index if not exists appointments_created_at_idx on public.appointments (created_at desc);

-- Lock the table: only the website's server key (service role) can write or read.
-- Nobody can read patient details with the public anon key.
alter table public.appointments enable row level security;
