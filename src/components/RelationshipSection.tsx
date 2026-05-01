import { Shield, Coffee, HandHeart, Infinity as InfinityIcon } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Trust", text: "I trust you with my real, imperfect self…\nand you’ve never made me regret that." },
  { icon: Coffee, title: "Comfort", text: "With you, even silence feels like home. No need to perform, no need to pretend." },
  { icon: HandHeart, title: "Support", text: "You believe in me on the days I forget how to. You're my biggest cheerleader and my safest place." },
  { icon: InfinityIcon, title: "Love", text: "Not the loud kind. The kind that shows up in small things. Every. Single. Day." },
];

export const RelationshipSection = () => {
  return (
    <section id="relationship" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-transparent to-blush/30" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">us, together</p>
          <h2 className="text-5xl text-gradient md:text-6xl">Our Relationship</h2>
        </div>

        <div className="romantic-card mx-auto mb-12 max-w-3xl p-8 md:p-12">
          <p className="text-center font-sans text-lg leading-relaxed text-foreground/85 md:text-xl whitespace-pre-line">
            Through all these moments, I’ve slowly come to know you…
            from those small glances to everything we are now.
            And somewhere along the way, you became my person —
            my comfort, my teddy, my Everything.
            I never expected my dream would turn so real.…
            It's just a WAOO, moment and a relief felling, which fells dreamy.
            <br />
            <br />
            <span className="text-deep-rose">I love you 🤍
            So much Excitedto be with u. I love you 🤍</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="romantic-card group p-6 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-button text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-2xl text-deep-rose">{p.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
