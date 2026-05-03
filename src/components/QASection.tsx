import { Heart } from "lucide-react";

const things = [
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
  return (
    <section id="qa" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/40 via-transparent to-blush/40" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">a little list</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Things I Love About You</h2>
          <p className="mt-4 font-sans text-muted-foreground">ten of a thousand reasons 🤍</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {things.map((t, i) => (
            <div
              key={i}
              className="romantic-card group flex items-start gap-4 p-5 transition-all hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-serif text-lg">{i + 1}</span>
              </div>
              <p className="font-sans text-foreground/80 pt-1.5">{t}</p>
              <Heart className="ml-auto h-4 w-4 flex-shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
