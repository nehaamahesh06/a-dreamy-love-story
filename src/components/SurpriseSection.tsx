import { useEffect, useRef, useState } from "react";
import { Gift, X, Heart, Upload, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const SurpriseSection = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("surprise").select("video_url").eq("id", 1).maybeSingle();
      if (data?.video_url) setVideoUrl(data.video_url);
    })();
  }, []);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "mp4";
      const path = `surprise-${Date.now()}.${ext}`;
      const { error } = await supabase.storage
        .from("memories")
        .upload(path, file, { upsert: true, contentType: file.type });
      if (error) throw error;
      const { data } = supabase.storage.from("memories").getPublicUrl(path);
      await supabase.from("surprise").upsert({ id: 1, video_url: data.publicUrl, updated_at: new Date().toISOString() });
      setVideoUrl(data.publicUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setUploading(false);
    }
  };

  const removeVideo = async () => {
    await supabase.from("surprise").upsert({ id: 1, video_url: null, updated_at: new Date().toISOString() });
    setVideoUrl(null);
  };

  return (
    <section id="surprise" className="relative px-6 py-24 text-justify">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">a little something</p>
        <h2 className="mb-6 text-5xl text-gradient md:text-6xl">A Surprise For You</h2>
        <p className="mb-10 font-sans text-muted-foreground">
          One last thing... open it only when you're alone, okay? 🤭
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="glow-button animate-pulse-glow inline-flex items-center gap-3 text-lg"
          >
            <Gift className="h-6 w-6 animate-float-gentle" />
            Click for Surprise 🎁
          </button>

          <button
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-2 text-sm text-foreground/80 hover:bg-background"
          >
            <Upload className="h-4 w-4" />
            {uploading ? "Uploading..." : videoUrl ? "Replace video" : "Upload video"}
          </button>

          {videoUrl && (
            <button
              onClick={removeVideo}
              className="inline-flex items-center gap-1 rounded-full border border-destructive/30 px-3 py-2 text-xs text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-3.5 w-3.5" /> Remove
            </button>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleUpload(f);
              e.target.value = "";
            }}
          />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-soft-black/60 px-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg animate-scale-in rounded-3xl bg-gradient-to-br from-white via-blush to-rose/30 p-8 shadow-2xl md:p-12"
            style={{ boxShadow: "0 30px 80px hsl(var(--primary) / 0.5)" }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-deep-rose transition hover:bg-white hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-button shadow-lg animate-heartbeat">
                <Heart className="h-8 w-8 fill-white text-white" />
              </div>

              <h3 className="mb-4 text-4xl text-deep-rose">My Nanna,</h3>

              {videoUrl && (
                <video
                  src={videoUrl}
                  controls
                  playsInline
                  className="mx-auto mb-6 w-full rounded-2xl shadow-lg"
                />
              )}

              <p className="font-sans text-base leading-relaxed text-foreground/85 md:text-lg">
                If I had a flower for every time I thought of you, I could walk through my garden forever.
                Thank you for being the softest, silliest, strongest part of my world.
                <br /><br />
                I love you. Today, tomorrow, and every birthday after this one. 🤍
                <br /><br />
                <span className="text-2xl text-primary">— Yours, always.</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
