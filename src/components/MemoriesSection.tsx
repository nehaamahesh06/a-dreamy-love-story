import { Camera, Heart } from "lucide-react";

const memories = [
  { caption: "The first time we hung out 🌸", color: "from-rose/40 to-blush" },
  { caption: "That random rainy day ☔", color: "from-primary/30 to-rose/40" },
  { caption: "Our silly selfie 🤳", color: "from-blush to-primary/30" },
  { caption: "Late night drives 🌙", color: "from-rose/40 to-primary/40" },
  { caption: "The little surprise 🎁", color: "from-primary/30 to-blush" },
  { caption: "Just being us 💕", color: "from-blush to-rose/40" },
];

export const MemoriesSection = () => {
  return (
    <section id="memories" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">moments forever</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Our Memories</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-muted-foreground">
            A little wall of "us". (🤍)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((m, i) => (
            <div key={i} className="romantic-card group overflow-hidden p-3">
              <div
                className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${m.color}`}
              >
                <Camera className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                <Heart className="absolute right-4 top-4 h-5 w-5 fill-white/80 text-white/80 animate-heartbeat" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-3 px-2 pb-2 text-center font-sans text-sm font-medium text-foreground/80">
                {m.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
