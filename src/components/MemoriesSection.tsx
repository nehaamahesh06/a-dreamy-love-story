import { Camera, Heart, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const defaultMemories = [
  { caption: "The first time we hung out 🌸", color: "from-rose/40 to-blush" },
  { caption: "That random rainy day ☔", color: "from-primary/30 to-rose/40" },
  { caption: "Our silly selfie 🤳", color: "from-blush to-primary/30" },
  { caption: "Late night drives 🌙", color: "from-rose/40 to-primary/40" },
  { caption: "The little surprise 🎁", color: "from-primary/30 to-blush" },
  { caption: "Just being us 💕", color: "from-blush to-rose/40" },
];

type MemoryItem = { caption: string; color: string; image_url?: string | null };

export const MemoriesSection = () => {
  const [items, setItems] = useState<MemoryItem[]>(defaultMemories);
  const [savingIdx, setSavingIdx] = useState<number | null>(null);
  const fileInputs = useRef<(HTMLInputElement | null)[]>([]);
  const captionTimers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("memories").select("*");
      if (data) {
        const merged = defaultMemories.map((d, i) => {
          const row = data.find((r: any) => r.id === i);
          return row ? { ...d, caption: row.caption || d.caption, image_url: row.image_url } : d;
        });
        setItems(merged);
      }
    })();
  }, []);

  const saveRow = async (i: number, patch: Partial<MemoryItem>) => {
    const next = [...items];
    next[i] = { ...next[i], ...patch };
    setItems(next);
    await supabase.from("memories").upsert({
      id: i,
      caption: next[i].caption,
      image_url: next[i].image_url ?? null,
      updated_at: new Date().toISOString(),
    });
  };

  const handleFile = async (i: number, file: File) => {
    setSavingIdx(i);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `memory-${i}-${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("memories").upload(path, file, {
        upsert: true,
        contentType: file.type,
      });
      if (error) throw error;
      const { data } = supabase.storage.from("memories").getPublicUrl(path);
      await saveRow(i, { image_url: data.publicUrl });
    } catch (e) {
      console.error(e);
    } finally {
      setSavingIdx(null);
    }
  };

  const updateCaption = (i: number, caption: string) => {
    const next = [...items];
    next[i] = { ...next[i], caption };
    setItems(next);
    if (captionTimers.current[i]) clearTimeout(captionTimers.current[i]);
    captionTimers.current[i] = setTimeout(() => saveRow(i, { caption }), 500);
  };

  const removeImage = (i: number) => saveRow(i, { image_url: null });

  return (
    <section id="memories" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">moments forever</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Our Memories</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-muted-foreground">
            A little wall of "us". (🤍) Tap any frame to add a photo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <div key={i} className="romantic-card group overflow-hidden p-3">
              <div
                className={`relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${m.color}`}
                onClick={() => fileInputs.current[i]?.click()}
              >
                {m.image_url ? (
                  <>
                    <img src={m.image_url} alt={m.caption} className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(i);
                      }}
                      className="absolute right-2 top-2 rounded-full bg-background/80 p-1.5 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Remove photo"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <Camera className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                    <div className="absolute bottom-3 flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80">
                      <Upload className="h-3 w-3" /> {savingIdx === i ? "Uploading..." : "Add photo"}
                    </div>
                  </>
                )}
                <Heart className="absolute right-4 top-4 h-5 w-5 fill-white/80 text-white/80 animate-heartbeat" />
              </div>

              <input
                ref={(el) => (fileInputs.current[i] = el)}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(i, f);
                  e.target.value = "";
                }}
              />

              <input
                type="text"
                value={m.caption}
                onChange={(e) => updateCaption(i, e.target.value)}
                className="mt-3 w-full rounded-md bg-transparent px-2 pb-2 text-center font-sans text-sm font-medium text-foreground/80 outline-none focus:bg-background/60"
                aria-label="Caption"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-xs text-muted-foreground">
          Photos & captions are saved to your website 🤍
        </p>
      </div>
    </section>
  );
};
