create table if not exists public.portfolio_likes (
  visitor_id uuid primary key,
  created_at timestamptz not null default now()
);

alter table public.portfolio_likes enable row level security;