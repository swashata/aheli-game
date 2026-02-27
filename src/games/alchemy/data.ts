import type { Recipe } from "@/games/alchemy/types";
export type MixHint = {
  inputs: string[];
  output: string;
  potentialPoints: number;
};

export const PRIMITIVE_ELEMENTS = ["Dirt", "Water", "Fire", "Wind", "Earth"];

export const PRIMITIVE_BACKGROUND_COLORS: Record<string, string> = {
  dirt: "bg-yellow-200",
  water: "bg-blue-200",
  fire: "bg-red-200",
  wind: "bg-gray-200",
  earth: "bg-zinc-200"
};

export const RECIPES: Recipe[] = [
  { inputs: ["mountain", "rain"], output: "waterfall" },
  { inputs: ["waterfall", "earth"], output: "river" },
  { inputs: ["fire", "earth"], output: "lava" },
  { inputs: ["mud", "mud"], output: "clay" },
  { inputs: ["volcano", "sand"], output: "glass" },
  { inputs: ["glass", "water"], output: "wine" },
  { inputs: ["air", "water"], output: "tornado" },
  { inputs: ["tornado", "air"], output: "storm" },
  { inputs: ["storm", "rain"], output: "rain storm" },
  { inputs: ["wind", "water"], output: "cloud" },
  { inputs: ["water", "cloud"], output: "rain" },
  { inputs: ["rain", "fire"], output: "rainbow" },
  { inputs: ["rainbow", "rainbow"], output: "unicorn" },
  { inputs: ["water", "water"], output: "ocean" },
  { inputs: ["cloud", "ocean"], output: "flood" },
  { inputs: ["fire", "wind"], output: "volcano" },
  { inputs: ["volcano", "water"], output: "stone" },
  { inputs: ["water", "stone"], output: "sand" },
  { inputs: ["water", "sand"], output: "mud" },
  { inputs: ["mud", "water"], output: "dirty water" },
  { inputs: ["dirty water", "sand", "stone"], output: "clean water" },
  { inputs: ["fire", "water"], output: "steam" },
  { inputs: ["steam", "fire"], output: "engine" },
  { inputs: ["wind", "fire"], output: "smoke" },
  { inputs: ["smoke", "water"], output: "fog" },
  { inputs: ["earth", "earth"], output: "mountain" },
  { inputs: ["stone", "water"], output: "rock" },
  { inputs: ["volcano", "clay"], output: "ceramic" },
  { inputs: ["ceramic", "stone"], output: "pottery" },
  { inputs: ["ocean", "ocean"], output: "sea" },
  { inputs: ["stone", "stone"], output: "boulder" },
  { inputs: ["stone", "sand"], output: "pyramid" },
  { inputs: ["pyramid", "earth"], output: "sphinx" },
  { inputs: ["mountain", "water"], output: "lake" },
  { inputs: ["fire", "cloud"], output: "lightning" },
  { inputs: ["pyramid", "water"], output: "tomb" },
  { inputs: ["mud", "fire"], output: "brick" },
  { inputs: ["clay", "glass"], output: "vase" },
  { inputs: ["brick", "brick"], output: "wall" },
  { inputs: ["glass", "brick"], output: "window" },
  { inputs: ["wall", "window"], output: "house" },
  { inputs: ["mud", "fire", "wind"], output: "bandage" },
  { inputs: ["bandage", "pyramid"], output: "mummy" },
  { inputs: ["mummy", "earth"], output: "human" },
  { inputs: ["human", "mummy"], output: "ghost" },
  { inputs: ["human", "human"], output: "family" },
  { inputs: ["wire", "fire"], output: "sun" },
  { inputs: ["boulder", "fire"], output: "metal" },
  { inputs: ["metal", "fire"], output: "gold" },
  { inputs: ["metal", "water"], output: "silver" },
  { inputs: ["earth", "wind"], output: "pressure" },
  { inputs: ["pressure", "boulder"], output: "diamond" },
  { inputs: ["gold", "diamond"], output: "crown" },
  { inputs: ["gold", "human"], output: "treasure" }
];

export const EMOJI_BY_ELEMENT: Record<string, string> = {
  dirt: "🟤",
  water: "💧",
  fire: "🔥",
  wind: "💨",
  air: "☁️",
  earth: "🪨",
  rainbow: "🌈",
  unicorn: "🦄",
  cloud: "☁️",
  volcano: "🌋",
  ocean: "🌊",
  gold: "🥇",
  silver: "🥈",
  diamond: "💎",
  metal: "⚙️",
  pressure: "🌀",
  crown: "👑",
  treasure: "💰"
};

export const POINTS_BY_ELEMENT: Record<string, number> = {
  dirt: 1,
  water: 1,
  fire: 1,
  wind: 1,
  earth: 1,
  mud: 2,
  cloud: 2,
  rain: 2,
  mountain: 3,
  lava: 3,
  volcano: 4,
  stone: 4,
  metal: 5,
  silver: 7,
  gold: 9,
  diamond: 12,
  crown: 12,
  treasure: 15,
  unicorn: 10
};

export function normalizeElementName(name: string): string {
  return name.trim().toLowerCase();
}

export function toTitleCase(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

export function makeRecipeKey(parts: string[]): string {
  return parts.map(normalizeElementName).sort().join("+");
}

const recipeMap = new Map<string, string>(RECIPES.map(recipe => [makeRecipeKey(recipe.inputs), toTitleCase(recipe.output)]));

export function getRecipeResult(parts: string[]): string | undefined {
  return recipeMap.get(makeRecipeKey(parts));
}

export const ELEMENT_POOL = Array.from(
  new Set([
    ...PRIMITIVE_ELEMENTS,
    ...RECIPES.flatMap(recipe => recipe.inputs.map(toTitleCase)),
    ...RECIPES.map(recipe => toTitleCase(recipe.output))
  ])
);

export function getRandomElement(): string {
  return ELEMENT_POOL[Math.floor(Math.random() * ELEMENT_POOL.length)];
}

export function getElementPoints(element: string): number {
  return POINTS_BY_ELEMENT[normalizeElementName(element)] ?? 3;
}

export function isPrimitiveElement(element: string): boolean {
  return PRIMITIVE_ELEMENTS.some(item => normalizeElementName(item) === normalizeElementName(element));
}

export function getPrimitiveBackgroundColor(element: string): string {
  return PRIMITIVE_BACKGROUND_COLORS[normalizeElementName(element)] ?? "bg-gray-200";
}

export function getTopAvailableMixHints(discovered: string[], limit = 3): MixHint[] {
  const knownSet = new Set(discovered.map(normalizeElementName));

  return RECIPES
    .filter(recipe => recipe.inputs.every(input => knownSet.has(normalizeElementName(input))))
    .map(recipe => {
      const output = toTitleCase(recipe.output);
      const outputKnown = knownSet.has(normalizeElementName(output));
      const potentialPoints = getElementPoints(output) + (outputKnown ? 0 : 2);
      return {
        inputs: recipe.inputs.map(toTitleCase),
        output,
        potentialPoints
      };
    })
    .sort((a, b) => b.potentialPoints - a.potentialPoints || a.output.localeCompare(b.output))
    .slice(0, limit);
}
