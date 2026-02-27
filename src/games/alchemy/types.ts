export type Recipe = {
  inputs: string[];
  output: string;
};

export type MixResult = {
  id: string;
  output: string;
  pointsEarned: number;
  totalPoints: number;
  bonusBursts: number;
  isNew: boolean;
  usedRandom: boolean;
};

export type MixUpSession = {
  id: string;
  startedAt: string;
  updatedAt: string;
  discovered: string[];
  mixes: number;
  points: number;
};
