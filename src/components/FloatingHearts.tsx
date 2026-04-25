import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 24,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-float absolute"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          <Heart
            size={h.size}
            className="fill-primary text-primary"
            style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))" }}
          />
        </div>
      ))}
    </div>
  );
};
