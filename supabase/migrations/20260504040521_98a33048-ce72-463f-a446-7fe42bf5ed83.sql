
create table public.memories (
  id integer primary key,
  caption text not null default '',
  image_url text,
  updated_at timestamptz not null default now()
);

alter table public.memories enable row level security;

create policy "Memories are viewable by everyone"
  on public.memories for select
  using (true);

create policy "Anyone can insert memories"
  on public.memories for insert
  with check (true);

create policy "Anyone can update memories"
  on public.memories for update
  using (true);

insert into storage.buckets (id, name, public)
values ('memories', 'memories', true);

create policy "Memory images are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'memories');

create policy "Anyone can upload memory images"
  on storage.objects for insert
  with check (bucket_id = 'memories');

create policy "Anyone can update memory images"
  on storage.objects for update
  using (bucket_id = 'memories');

create policy "Anyone can delete memory images"
  on storage.objects for delete
  using (bucket_id = 'memories');
