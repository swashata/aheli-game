import type { ComponentType } from "react";
import MixUpGame from "@/games/alchemy/MixUpGame";
import RocketPopGame from "@/games/rocket-pop";

export type GameDefinition = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  accentFrom: string;
  accentTo: string;
  component: ComponentType;
};

export const games: GameDefinition[] = [
  {
    slug: "alchemy",
    title: "Aheli Alchemy",
    description: "Learn by mixing elements to discover metals, gems, and magical creations.",
    emoji: "🧪",
    accentFrom: "#4c1d95",
    accentTo: "#a855f7",
    component: MixUpGame
  },
  {
    slug: "rocket-pop",
    title: "Rocket Pop",
    description: "Pop the flying stars and beat your best score in 20 seconds.",
    emoji: "🚀",
    accentFrom: "#7c3aed",
    accentTo: "#c084fc",
    component: RocketPopGame
  }
];

export const gamesBySlug: Record<string, GameDefinition> = Object.fromEntries(
  games.map(game => [game.slug, game])
);
