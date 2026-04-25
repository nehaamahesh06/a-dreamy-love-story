import { useState } from "react";
import { Gift, X, Heart } from "lucide-react";

export const SurpriseSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="surprise" className="relative px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">a little something</p>
        <h2 className="mb-6 text-5xl text-gradient md:text-6xl">A Surprise For You</h2>
        <p className="mb-10 font-sans text-muted-foreground">
          One last thing... open it only when you're alone, okay? 🤭
        </p>

        <button
          onClick={() => setOpen(true)}
          className="glow-button animate-pulse-glow inline-flex items-center gap-3 text-lg"
        >
          <Gift className="h-6 w-6 animate-float-gentle" />
          Click for Surprise 🎁
        </button>
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
              <p className="font-sans text-base leading-relaxed text-foreground/85 md:text-lg">
                If I had a flower for every time I thought of you, I could walk through my garden forever.
                Thank you for being the softest, silliest, strongest part of my world.
                <br />
                <br />
                I love you. Today, tomorrow, and every birthday after this one. 🤍
                <br />
                <br />
                <span className="text-2xl text-primary">— Yours, always.</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
