import { Star } from "lucide-react";

const learnings = [
  { emoji: "☕", title: "Your little habits", text: "The way you go quiet when you're thinking. The way you pretend you're not hungry but always are." },
  { emoji: "🥺", title: "Your soft heart", text: "Underneath all that toughness, you're the gentlest person I know. You care so much, even when you don't say it." },
  { emoji: "😤", title: "Your stubbornness", text: "You'd argue with the sky if it disagreed with you. And honestly? It's kind of cute." },
  { emoji: "🤍", title: "How you love", text: "You love quietly — through actions, through being there, through small things most people would miss. But I see them. All of them." },
  { emoji: "🌙", title: "​Missing at nights", text: "Your possessiveness, your patience, your weird little obsessions., Your cuteness , Your excitement when i do little tgs to u ." },
  { emoji: "✨", title: "What makes you, you", text: "Your humour, your patience, your weird little obsessions. Every piece of you is my favourite piece." },
];

export const LearnedSection = () => {
  return (
    <section id="learned" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-sm uppercase tracking-widest text-primary">little discoveries</p>
          <h2 className="text-5xl text-gradient md:text-6xl">What I've Learned About You</h2>
          <p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 font-sans text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            All the small things I noticed
            <Star className="h-4 w-4 fill-primary text-primary" />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnings.map((item) => (
            <div key={item.title} className="romantic-card group p-6">
              <div className="mb-3 text-5xl transition-transform group-hover:scale-125 group-hover:-rotate-12">
                {item.emoji}
              </div>
              <h3 className="mb-2 text-2xl text-deep-rose">{item.title}</h3>
              <p className="font-sans leading-relaxed text-foreground/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
