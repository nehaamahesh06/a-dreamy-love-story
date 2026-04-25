import { Heart } from "lucide-react";

export const FinalSection = () => {
  return (
    <section id="final" className="relative overflow-hidden px-6 py-32 text-center">
      <div className="absolute inset-0 bg-gradient-romantic opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      {/* extra ambient hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Heart
          key={i}
          className="absolute fill-primary/40 text-primary/40 animate-float-gentle"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${20 + (i % 4) * 8}px`,
            height: `${20 + (i % 4) * 8}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="mb-6 flex justify-center">
          <Heart className="h-12 w-12 fill-primary text-primary animate-heartbeat" />
        </div>

        <h2 className="mb-8 text-5xl text-gradient md:text-7xl">To my Nikhil,</h2>

        <p className="font-sans text-lg leading-relaxed text-foreground/85 md:text-xl">
          Happy birthday, my favourite human. Thank you for existing, for staying, for choosing me on the easy days
          and the hard ones. I hope this year holds everything your soft little heart hopes for —
          and a hundred things it doesn't even know to ask for yet.
        </p>

        <p className="mt-8 text-3xl text-deep-rose md:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Forever yours,
          <br />
          your girl 🤍
        </p>

        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <Heart
              key={i}
              className="h-5 w-5 fill-primary text-primary animate-heartbeat"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <p className="mt-8 font-sans text-xs text-muted-foreground">
          made with love, for the boy who has my whole heart 💌
        </p>
      </div>
    </section>
  );
};
