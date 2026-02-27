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
  { inputs: ["gold", "human"], output: "treasure" },
  { inputs: ["engine", "metal"], output: "robot" },
  { inputs: ["engine", "wind"], output: "helicopter" },
  { inputs: ["engine", "ocean"], output: "submarine" },
  { inputs: ["engine", "fire"], output: "rocket" },
  { inputs: ["rocket", "cloud"], output: "spaceship" },
  { inputs: ["spaceship", "earth"], output: "planet" },
  { inputs: ["planet", "water"], output: "life" },
  { inputs: ["life", "fire"], output: "dragon" },
  { inputs: ["dragon", "human"], output: "knight" },
  { inputs: ["knight", "house"], output: "castle" },
  { inputs: ["castle", "treasure"], output: "kingdom" },
  { inputs: ["unicorn", "rainbow"], output: "pegasus" },
  { inputs: ["pegasus", "cloud"], output: "sky city" },
  { inputs: ["storm", "metal"], output: "thunder sword" },
  { inputs: ["earth", "water"], output: "soil" },
  { inputs: ["soil", "sun"], output: "grass" },
  { inputs: ["grass", "water"], output: "plant" },
  { inputs: ["plant", "water"], output: "tree" },
  { inputs: ["tree", "tree"], output: "forest" },
  { inputs: ["forest", "rain"], output: "jungle" },
  { inputs: ["plant", "rain"], output: "flower" },
  { inputs: ["flower", "flower"], output: "garden" },
  { inputs: ["tree", "wind"], output: "leaf" },
  { inputs: ["leaf", "water"], output: "tea" },
  { inputs: ["tree", "sun"], output: "fruit" },
  { inputs: ["fruit", "water"], output: "juice" },
  { inputs: ["fruit", "fire"], output: "jam" },
  { inputs: ["fruit", "sun"], output: "sugar" },
  { inputs: ["sugar", "fire"], output: "candy" },
  { inputs: ["candy", "crown"], output: "royal candy" },
  { inputs: ["water", "wind"], output: "ice" },
  { inputs: ["ice", "juice"], output: "slush" },
  { inputs: ["ice", "water"], output: "snow" },
  { inputs: ["ice", "milk"], output: "ice cream" },
  { inputs: ["ice cream", "rainbow"], output: "rainbow ice cream" },
  { inputs: ["plant", "sun"], output: "grain" },
  { inputs: ["grain", "stone"], output: "flour" },
  { inputs: ["flour", "water"], output: "dough" },
  { inputs: ["dough", "fire"], output: "bread" },
  { inputs: ["bread", "cheese"], output: "sandwich" },
  { inputs: ["sandwich", "fire"], output: "toast" },
  { inputs: ["life", "water"], output: "fish" },
  { inputs: ["life", "earth"], output: "animal" },
  { inputs: ["animal", "water"], output: "duck" },
  { inputs: ["animal", "wind"], output: "bird" },
  { inputs: ["bird", "bird"], output: "flock" },
  { inputs: ["bird", "fire"], output: "phoenix" },
  { inputs: ["animal", "human"], output: "pet" },
  { inputs: ["pet", "house"], output: "home" },
  { inputs: ["pet", "pet"], output: "pack" },
  { inputs: ["animal", "forest"], output: "wolf" },
  { inputs: ["wolf", "human"], output: "companion" },
  { inputs: ["animal", "jungle"], output: "tiger" },
  { inputs: ["animal", "tree"], output: "monkey" },
  { inputs: ["fish", "ocean"], output: "whale" },
  { inputs: ["whale", "water"], output: "fountain" },
  { inputs: ["human", "stone"], output: "tool" },
  { inputs: ["tool", "metal"], output: "sword" },
  { inputs: ["sword", "fire"], output: "blade" },
  { inputs: ["tool", "tree"], output: "wood" },
  { inputs: ["wood", "pressure"], output: "paper" },
  { inputs: ["wood", "water"], output: "boat" },
  { inputs: ["boat", "wind"], output: "sailboat" },
  { inputs: ["boat", "engine"], output: "ship" },
  { inputs: ["ship", "treasure"], output: "pirate" },
  { inputs: ["pirate", "sea"], output: "kraken" },
  { inputs: ["kraken", "lightning"], output: "storm king" },
  { inputs: ["human", "tool"], output: "builder" },
  { inputs: ["builder", "wall"], output: "bridge" },
  { inputs: ["bridge", "river"], output: "crossing" },
  { inputs: ["builder", "house"], output: "village" },
  { inputs: ["village", "village"], output: "town" },
  { inputs: ["town", "town"], output: "city" },
  { inputs: ["city", "city"], output: "metropolis" },
  { inputs: ["city", "water"], output: "harbor" },
  { inputs: ["harbor", "ship"], output: "port" },
  { inputs: ["ship", "market"], output: "trade" },
  { inputs: ["port", "trade"], output: "market" },
  { inputs: ["market", "gold"], output: "bank" },
  { inputs: ["bank", "city"], output: "economy" },
  { inputs: ["metal", "lightning"], output: "magnet" },
  { inputs: ["magnet", "metal"], output: "compass" },
  { inputs: ["paper", "compass"], output: "map" },
  { inputs: ["smoke", "water"], output: "ink" },
  { inputs: ["paper", "ink"], output: "book" },
  { inputs: ["human", "book"], output: "student" },
  { inputs: ["student", "book"], output: "library" },
  { inputs: ["library", "city"], output: "school" },
  { inputs: ["school", "tool"], output: "science" },
  { inputs: ["science", "engine"], output: "machine" },
  { inputs: ["machine", "human"], output: "engineer" },
  { inputs: ["engineer", "rocket"], output: "astronaut" },
  { inputs: ["astronaut", "spaceship"], output: "space station" },
  { inputs: ["space station", "robot"], output: "lab" },
  { inputs: ["lab", "life"], output: "cloning" },
  { inputs: ["cloning", "animal"], output: "hybrid" },
  { inputs: ["planet", "planet"], output: "solar system" },
  { inputs: ["solar system", "sun"], output: "galaxy" },
  { inputs: ["galaxy", "galaxy"], output: "universe" },
  { inputs: ["universe", "life"], output: "alien" },
  { inputs: ["alien", "robot"], output: "cyborg" },
  { inputs: ["cyborg", "human"], output: "android" },
  { inputs: ["android", "city"], output: "future city" },
  { inputs: ["rainbow", "cloud"], output: "magic" },
  { inputs: ["magic", "stone"], output: "rune" },
  { inputs: ["rune", "fire"], output: "spell" },
  { inputs: ["human", "spell"], output: "wizard" },
  { inputs: ["wizard", "castle"], output: "magic tower" },
  { inputs: ["magic tower", "sky city"], output: "floating kingdom" },
  { inputs: ["unicorn", "flower"], output: "fairy" },
  { inputs: ["fairy", "dust"], output: "pixie" },
  { inputs: ["dirt", "wind"], output: "dust" },
  { inputs: ["dust", "magic"], output: "stardust" },
  { inputs: ["stardust", "sky city"], output: "constellation" },
  { inputs: ["planet", "stone"], output: "moon" },
  { inputs: ["sun", "water"], output: "sunset" },
  { inputs: ["sunset", "moon"], output: "night" },
  { inputs: ["moon", "stardust"], output: "comet" },
  { inputs: ["sun", "moon"], output: "eclipse" },
  { inputs: ["night", "magic"], output: "dream" },
  { inputs: ["dream", "human"], output: "idea" },
  { inputs: ["idea", "tool"], output: "invention" },
  { inputs: ["invention", "engine"], output: "vehicle" },
  { inputs: ["vehicle", "wind"], output: "airplane" },
  { inputs: ["airplane", "planet"], output: "orbit" },
  { inputs: ["cloud", "cloud"], output: "thundercloud" },
  { inputs: ["thundercloud", "rain"], output: "monsoon" },
  { inputs: ["monsoon", "earth"], output: "swamp" },
  { inputs: ["swamp", "life"], output: "frog" },
  { inputs: ["frog", "frog"], output: "choir" },
  { inputs: ["family", "house"], output: "neighborhood" },
  { inputs: ["neighborhood", "city"], output: "community" },
  { inputs: ["community", "garden"], output: "park" },
  { inputs: ["park", "animal"], output: "zoo" },
  { inputs: ["zoo", "science"], output: "conservation" },
  { inputs: ["conservation", "forest"], output: "sanctuary" },
  { inputs: ["sanctuary", "unicorn"], output: "wonderland" }
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
  treasure: "💰",
  robot: "🤖",
  helicopter: "🚁",
  submarine: "🚢",
  rocket: "🚀",
  spaceship: "🛸",
  planet: "🪐",
  life: "🧬",
  dragon: "🐉",
  knight: "🛡️",
  castle: "🏰",
  kingdom: "👑",
  pegasus: "🪽",
  "sky city": "🌆",
  "thunder sword": "⚔️",
  wizard: "🧙",
  fairy: "🧚",
  galaxy: "🌌",
  universe: "✨",
  alien: "👽",
  cyborg: "🦾",
  android: "🤖",
  "magic tower": "🗼",
  "floating kingdom": "🏯",
  wonderland: "🎠"
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
  unicorn: 10,
  robot: 10,
  helicopter: 9,
  submarine: 10,
  rocket: 11,
  spaceship: 13,
  planet: 14,
  life: 12,
  dragon: 14,
  knight: 11,
  castle: 13,
  kingdom: 16,
  pegasus: 12,
  "sky city": 15,
  "thunder sword": 13,
  galaxy: 16,
  universe: 20,
  alien: 14,
  cyborg: 15,
  android: 15,
  wizard: 14,
  fairy: 12,
  "magic tower": 16,
  "floating kingdom": 20,
  wonderland: 22
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
