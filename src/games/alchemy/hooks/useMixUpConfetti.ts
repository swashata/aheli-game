import { EMOJI_BY_ELEMENT, normalizeElementName } from "@/games/alchemy/data";
import confetti from "canvas-confetti";
import { useCallback } from "react";

const COLORS_BY_KEY: Record<string, string[]> = {
  fire: ["#fb7185", "#f97316", "#facc15"],
  water: ["#38bdf8", "#60a5fa", "#22d3ee"],
  earth: ["#a16207", "#92400e", "#65a30d"],
  dirt: ["#8b5a2b", "#a16207", "#ca8a04"],
  wind: ["#dbeafe", "#e0e7ff", "#f5f3ff"],
  air: ["#dbeafe", "#f0f9ff", "#cffafe"]
};

type ConfettiWithText = typeof confetti & {
  shapeFromText?: (args: { text: string; scalar?: number }) => unknown;
};

export function useMixUpConfetti() {
  return useCallback((element: string, bursts = 1) => {
    const key = normalizeElementName(element);
    const colors = COLORS_BY_KEY[key] ?? ["#a78bfa", "#c4b5fd", "#ddd6fe"];
    const emoji = EMOJI_BY_ELEMENT[key];
    const confettiWithText = confetti as ConfettiWithText;
    const shape = emoji && confettiWithText.shapeFromText ? confettiWithText.shapeFromText({ text: emoji, scalar: 1.25 }) : null;

    for (let i = 0; i < bursts; i += 1) {
      window.setTimeout(() => {
        void confetti({
          particleCount: i === 0 ? 90 : 55,
          spread: i === 0 ? 75 : 95,
          startVelocity: 42,
          origin: { y: 0.58 },
          scalar: 1.05,
          colors,
          ...(shape ? { shapes: [shape] } : {})
        });
      }, i * 130);
    }
  }, []);
}
