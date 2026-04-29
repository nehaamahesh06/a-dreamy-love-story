import { Heart, Sparkles } from "lucide-react";

interface WelcomeSectionProps {
  onStart: () => void;
}

export const WelcomeSection = ({ onStart }: WelcomeSectionProps) => {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 bg-gradient-romantic opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 animate-fade-in-up">
        <div className="mb-6 flex justify-center gap-2">
          <Sparkles className="h-6 w-6 animate-float-gentle text-primary" />
          <Heart className="h-8 w-8 animate-heartbeat fill-primary text-primary" />
          <Sparkles className="h-6 w-6 animate-float-gentle text-primary" style={{ animationDelay: "1s" }} />
        </div>

        <h1 className="mb-4 text-5xl font-bold leading-tight text-gradient sm:text-6xl md:text-8xl">
          Happy Birthday
        </h1>
        <h2 className="mb-6 text-4xl text-deep-rose sm:text-5xl md:text-7xl">
          Nanna ❤️
        </h2>

        <p className="mb-2 font-sans text-lg text-muted-foreground sm:text-xl">
          A more love for my favourite person{"\n"}
        </p>
        <p className="mb-10 font-sans text-3xl font-semibold text-primary sm:text-4xl">
          Nikhil
        </p>

        <button
          onClick={onStart}
          className="glow-button animate-pulse-glow inline-flex items-center gap-2 text-lg sm:text-xl"
        >
          <Heart className="h-5 w-5 fill-white" />
          Start Our Story
        </button>

        <p className="mt-8 font-sans text-sm text-muted-foreground">
          ✨ scroll gently, made with love ✨
        </p>
      </div>
    </section>
  );
};
