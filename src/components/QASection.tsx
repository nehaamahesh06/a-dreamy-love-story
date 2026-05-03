import { useEffect, useState } from "react";
import { Heart, Pencil, Plus, Check, X, Trash2, GripVertical } from "lucide-react";

const STORAGE_KEY = "things-i-love-v1";

const defaultThings = [
  "The way your eyes smile before your lips do.",
  "How your voice softens when you say my name.",
  "Your weird little obsessions I secretly adore.",
  "The way you hold me like I might disappear.",
  "How honest you are, even when it's hard.",
  "Your stubborn heart that still chose mine.",
  "The way you remember the smallest things I say.",
  "How you make ordinary days feel like ours.",
  "Your laugh — my favourite sound in the world.",
  "The way 'us' just feels right.",
];

export const QASection = () => {
  const [things, setThings] = useState<string[]>(defaultThings);
  const [editing, setEditing] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const reorder = (from: number, to: number) => {
    if (from === to) return;
    setThings((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setThings(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(things));
    } catch {}
  }, [things]);

  const updateItem = (i: number, value: string) =>
    setThings((prev) => prev.map((t, idx) => (idx === i ? value : t)));
  const removeItem = (i: number) =>
    setThings((prev) => prev.filter((_, idx) => idx !== i));
  const addItem = () => setThings((prev) => [...prev, "Something new I love about you…"]);
  const resetItems = () => {
    if (confirm("Reset to the original list?")) setThings(defaultThings);
  };

  return (
    <section id="qa" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/40 via-transparent to-blush/40" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">a little list</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Things I Love About You</h2>
          <p className="mt-4 font-sans text-muted-foreground">ten of a thousand reasons 🤍</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setEditing((e) => !e)}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-sans text-sm text-primary transition hover:bg-primary/20"
            >
              {editing ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
              {editing ? "Done" : "Edit list"}
            </button>
            {editing && (
              <button
                onClick={resetItems}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 font-sans text-sm text-muted-foreground transition hover:bg-muted/70"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {things.map((t, i) => (
            <div
              key={i}
              draggable={editing}
              onDragStart={(e) => {
                if (!editing) return;
                setDragIndex(i);
                e.dataTransfer.effectAllowed = "move";
              }}
              onDragOver={(e) => {
                if (!editing || dragIndex === null) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                if (overIndex !== i) setOverIndex(i);
              }}
              onDragLeave={() => {
                if (overIndex === i) setOverIndex(null);
              }}
              onDrop={(e) => {
                if (!editing || dragIndex === null) return;
                e.preventDefault();
                reorder(dragIndex, i);
                setDragIndex(null);
                setOverIndex(null);
              }}
              onDragEnd={() => {
                setDragIndex(null);
                setOverIndex(null);
              }}
              className={`romantic-card group flex items-start gap-4 p-5 transition-all ${
                editing ? "cursor-move" : "hover:-translate-y-1"
              } ${dragIndex === i ? "opacity-40" : ""} ${
                overIndex === i && dragIndex !== i ? "ring-2 ring-primary" : ""
              }`}
            >
              {editing && (
                <div className="flex h-10 flex-shrink-0 items-center text-muted-foreground" aria-label="Drag to reorder">
                  <GripVertical className="h-5 w-5" />
                </div>
              )}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-serif text-lg">{i + 1}</span>
              </div>

              {editing ? (
                <textarea
                  value={t}
                  onChange={(e) => updateItem(i, e.target.value)}
                  rows={2}
                  className="flex-1 resize-none rounded-md border border-primary/20 bg-background/60 p-2 font-sans text-foreground/80 outline-none focus:border-primary"
                />
              ) : (
                <p className="flex-1 pt-1.5 font-sans text-foreground/80">{t}</p>
              )}

              {editing ? (
                <button
                  onClick={() => removeItem(i)}
                  className="ml-auto flex-shrink-0 rounded-full p-1.5 text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                  aria-label="Remove"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              ) : (
                <Heart className="ml-auto h-4 w-4 flex-shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
          ))}

          {editing && (
            <button
              onClick={addItem}
              className="romantic-card flex items-center justify-center gap-2 p-5 font-sans text-primary transition hover:-translate-y-1"
            >
              <Plus className="h-5 w-5" />
              Add another reason
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
