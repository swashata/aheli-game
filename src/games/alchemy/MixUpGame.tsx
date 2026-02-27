import { Button } from "@/components/ui/button";
import { getTopAvailableMixHints } from "@/games/alchemy/data";
import GameHeader from "@/games/alchemy/components/GameHeader";
import MixStation from "@/games/alchemy/components/MixStation";
import SessionHistory from "@/games/alchemy/components/SessionHistory";
import StatsCard from "@/games/alchemy/components/StatsCard";
import { getDiscoverableCount, useMixUpStore } from "@/games/alchemy/hooks/useMixUpStore";
import { useMixUpConfetti } from "@/games/alchemy/hooks/useMixUpConfetti";
import { useMixUpPersistence } from "@/games/alchemy/hooks/useMixUpPersistence";
import { useEffect, useMemo, useState } from "react";

export default function MixUpGame() {
  const discovered = useMixUpStore(state => state.discovered);
  const slots = useMixUpStore(state => state.slots);
  const lastResult = useMixUpStore(state => state.lastResult);
  const mixes = useMixUpStore(state => state.mixes);
  const points = useMixUpStore(state => state.points);
  const sessionId = useMixUpStore(state => state.sessionId);
  const hydrated = useMixUpStore(state => state.hydrated);
  const setSlot = useMixUpStore(state => state.setSlot);
  const clearSlot = useMixUpStore(state => state.clearSlot);
  const mix = useMixUpStore(state => state.mix);
  const resetSession = useMixUpStore(state => state.resetSession);

  const { history, ready } = useMixUpPersistence();
  const celebrate = useMixUpConfetti();
  const [hintText, setHintText] = useState<string>("");

  const topHints = useMemo(() => getTopAvailableMixHints(discovered, 3), [discovered]);

  useEffect(() => {
    if (!lastResult) return;
    celebrate(lastResult.output, Math.max(1, 1 + lastResult.bonusBursts));
  }, [lastResult, celebrate]);

  function showHint() {
    if (topHints.length === 0) {
      setHintText("No strong hints yet. Keep discovering more elements.");
      return;
    }
    const choice = topHints[Math.floor(Math.random() * topHints.length)];
    setHintText(`${choice.inputs.join(" + ")} -> ${choice.output} (+${choice.potentialPoints} pts)`);
  }

  if (!ready || !hydrated) {
    return <div className="rounded-lg border border-zinc-300 bg-white p-6 text-sm text-zinc-600">Loading mix lab...</div>;
  }

  return (
    <div className="space-y-3">
      <GameHeader title="Aheli Alchemy" />
      <StatsCard
        discoveredCount={discovered.length}
        totalCount={getDiscoverableCount()}
        mixes={mixes}
        points={points}
      />
      <div className="grid gap-3 lg:grid-cols-[1fr_320px]">
        <MixStation
          discovered={discovered}
          slots={slots}
          lastResult={lastResult}
          onSlotSet={setSlot}
          onSlotClear={clearSlot}
          onMix={mix}
        />
        <SessionHistory history={history} currentSessionId={sessionId} />
      </div>
      <div className="space-y-2">
        {hintText && (
          <div className="rounded-md border border-violet-200 bg-violet-50 px-3 py-2 text-sm text-violet-900">
            Hint: {hintText}
          </div>
        )}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={showHint}>Hint</Button>
          <Button type="button" variant="outline" onClick={resetSession}>Reset Game</Button>
        </div>
      </div>
    </div>
  );
}
