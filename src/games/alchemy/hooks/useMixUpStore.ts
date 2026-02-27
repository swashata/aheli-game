import { ELEMENT_POOL, PRIMITIVE_ELEMENTS, getElementPoints, getRandomElement, getRecipeResult } from "@/games/alchemy/data";
import type { MixResult, MixUpSession } from "@/games/alchemy/types";
import { produce } from "immer";
import { create } from "zustand";

type MixUpState = {
  sessionId: string;
  startedAt: string;
  discovered: string[];
  slots: Array<string | null>;
  mixes: number;
  points: number;
  lastResult: MixResult | null;
  hydrated: boolean;
};

type MixUpActions = {
  hydrate: (session: MixUpSession) => void;
  setSlot: (index: number, value: string) => void;
  clearSlot: (index: number) => void;
  mix: () => void;
  resetSession: () => void;
};

const SLOT_COUNT = 3;

function createSessionBase(): Pick<MixUpState, "sessionId" | "startedAt" | "discovered" | "slots" | "mixes" | "points" | "lastResult"> {
  return {
    sessionId: crypto.randomUUID(),
    startedAt: new Date().toISOString(),
    discovered: [...PRIMITIVE_ELEMENTS],
    slots: Array.from({ length: SLOT_COUNT }, () => null),
    mixes: 0,
    points: 0,
    lastResult: null
  };
}

type SessionSnapshotInput = Pick<MixUpState, "sessionId" | "startedAt" | "discovered" | "mixes" | "points">;

export function createSessionSnapshot(state: SessionSnapshotInput): MixUpSession {
  return {
    id: state.sessionId,
    startedAt: state.startedAt,
    updatedAt: new Date().toISOString(),
    discovered: state.discovered,
    mixes: state.mixes,
    points: state.points
  };
}

export const useMixUpStore = create<MixUpState & MixUpActions>((set) => ({
  ...createSessionBase(),
  hydrated: false,

  hydrate: (session) => {
    set({
      sessionId: session.id,
      startedAt: session.startedAt,
      discovered: session.discovered.length > 0 ? session.discovered : [...PRIMITIVE_ELEMENTS],
      mixes: session.mixes,
      points: session.points ?? 0,
      slots: Array.from({ length: SLOT_COUNT }, () => null),
      lastResult: null,
      hydrated: true
    });
  },

  setSlot: (index, value) => {
    set(
      produce<MixUpState>((draft) => {
        if (index < 0 || index >= draft.slots.length) return;
        draft.slots[index] = value;
      })
    );
  },

  clearSlot: (index) => {
    set(
      produce<MixUpState>((draft) => {
        if (index < 0 || index >= draft.slots.length) return;
        draft.slots[index] = null;
      })
    );
  },

  mix: () => {
    set(
      produce<MixUpState>((draft) => {
        const selected = draft.slots.filter(Boolean) as string[];
        if (selected.length < 2) return;

        const exactResult = getRecipeResult(selected);
        const output = exactResult ?? getRandomElement();
        const isNew = !draft.discovered.includes(output);
        const pointsEarned = getElementPoints(output) + (isNew ? 2 : 0);
        const previousPoints = draft.points;
        const totalPoints = previousPoints + pointsEarned;
        const bonusBursts = Math.max(0, Math.floor(totalPoints / 10) - Math.floor(previousPoints / 10));

        if (isNew) {
          draft.discovered = [...draft.discovered, output].sort((a, b) => a.localeCompare(b));
        }

        draft.mixes += 1;
        draft.points = totalPoints;
        draft.slots = Array.from({ length: SLOT_COUNT }, () => null);
        draft.lastResult = {
          id: crypto.randomUUID(),
          output,
          pointsEarned,
          totalPoints,
          bonusBursts,
          isNew,
          usedRandom: !exactResult
        };
      })
    );
  },

  resetSession: () => {
    set({
      ...createSessionBase(),
      hydrated: true
    });
  }
}));

export function getSlotCount(): number {
  return SLOT_COUNT;
}

export function getDiscoverableCount(): number {
  return ELEMENT_POOL.length;
}
