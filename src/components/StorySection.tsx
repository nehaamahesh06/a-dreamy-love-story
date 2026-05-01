import { MessageCircle, Smile, Sparkles, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "The Start of Something Beautiful”",
    text: "It started with small glances I could feel…\nthen turned into late story replies and quiet texts on Instagram.\nAnd before I even realised it, that became our first conversation.",
  },
  {
    icon: Smile,
    title: "In Between Those Days",
    text: "The first time you made me laugh — really laugh — I knew there was something different about you. Something warm. Something safe.",
  },
  {
    icon: Sparkles,
    title: "Where We Became Inseparable",
    text: "Somewhere between those December classes… we got closer.\nOne class after another, sitting next to each other without even planning it.\nDo you remember those days after class… sitting in the volleyball ground?\nThat’s where, without even realizing it, we slowly found each other.",
  },
  {
    icon: HeartHandshake,
    title: "​Your best Part",
    text: "The best part about you is the way you correct me when I’m wrong,\nbut still support me no matter what.\nThe way you take care of me, the way you make me feel special…\nI truly love everything about you.",
  },
];

export const StorySection = () => {
  return (
    <section id="story" className="relative px-6 py-24 text-justify">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">our journey</p>
          <h2 className="text-5xl text-gradient md:text-6xl">​I GOT EACH OTHER </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-muted-foreground">
            Every "us" has a beginning. Here's ours, in tiny little chapters.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-rose to-blush md:left-1/2 md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-6 md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className={`w-full md:w-1/2 md:px-8 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
                    <div className="romantic-card p-6 md:p-8">
                      <div className={`mb-3 flex items-center gap-3 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-center`}>
                        <div className="h-10 w-10 rounded-full bg-gradient-button text-white shadow-lg flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-3xl text-deep-rose">{step.title}</h3>
                      <p className="font-sans leading-relaxed text-foreground/80 whitespace-pre-line">{step.text}</p>
                    </div>
                  </div>

                  <div className="absolute left-6 top-8 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="h-5 w-5 rounded-full bg-primary ring-4 ring-blush animate-pulse-glow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
