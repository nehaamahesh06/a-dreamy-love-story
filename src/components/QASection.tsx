import { useState } from "react";
import { ChevronDown } from "lucide-react";

const qa = [
  { q: "My favourite thing about you? 🤍", a: "The way you look at me like I'm your whole world… because you're mine too." },
  { q: "What makes me feel safest? 🫂", a: "Your hugs. Your voice. The way you say 'I'm here, Nanna.'" },
  { q: "The moment I knew it was you? ✨", a: "When being with you started feeling like coming home." },
  { q: "What I'd never trade about us? 💞", a: "Our late-night talks, our silly fights, and every 'I love you' in between." },
  { q: "My favourite version of you? 🌙", a: "The sleepy, honest, soft one that's only mine at 2 AM." },
  { q: "How long will I love you? ♾️", a: "Past forever. And then a little more, just to be sure." },
];

export const QASection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="qa" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/40 via-transparent to-blush/40" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">just for fun</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Cute Q&A About Us</h2>
          <p className="mt-4 font-sans text-muted-foreground">tap to reveal the answer 🤍</p>
        </div>

        <div className="space-y-4">
          {qa.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="romantic-card w-full p-5 text-left transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-deep-rose md:text-xl">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-foreground/80">{item.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
