
create table public.surprise (
  id integer primary key,
  video_url text,
  updated_at timestamptz not null default now()
);

alter table public.surprise enable row level security;

create policy "Surprise is viewable by everyone"
  on public.surprise for select using (true);

create policy "Anyone can insert surprise"
  on public.surprise for insert with check (true);

create policy "Anyone can update surprise"
  on public.surprise for update using (true);

insert into public.surprise (id, video_url) values (1, null);
