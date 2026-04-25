import { FloatingHearts } from "@/components/FloatingHearts";
import { WelcomeSection } from "@/components/WelcomeSection";
import { StorySection } from "@/components/StorySection";
import { RelationshipSection } from "@/components/RelationshipSection";
import { LearnedSection } from "@/components/LearnedSection";
import { MemoriesSection } from "@/components/MemoriesSection";
import { QASection } from "@/components/QASection";
import { SurpriseSection } from "@/components/SurpriseSection";
import { FinalSection } from "@/components/FinalSection";

const Index = () => {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts count={18} />

      <div className="relative z-10">
        <WelcomeSection onStart={scrollToStory} />
        <StorySection />
        <RelationshipSection />
        <LearnedSection />
        <MemoriesSection />
        <QASection />
        <SurpriseSection />
        <FinalSection />
      </div>
    </main>
  );
};

export default Index;
