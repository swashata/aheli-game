import { createSessionSnapshot, useMixUpStore } from "@/games/alchemy/hooks/useMixUpStore";
import { getActiveSession, getSessionHistory, saveSession } from "@/games/alchemy/storage";
import type { MixUpSession } from "@/games/alchemy/types";
import { useEffect, useMemo, useState } from "react";

export function useMixUpPersistence() {
  const sessionId = useMixUpStore(state => state.sessionId);
  const startedAt = useMixUpStore(state => state.startedAt);
  const discovered = useMixUpStore(state => state.discovered);
  const mixes = useMixUpStore(state => state.mixes);
  const points = useMixUpStore(state => state.points);
  const hydrated = useMixUpStore(state => state.hydrated);
  const hydrate = useMixUpStore(state => state.hydrate);

  const [history, setHistory] = useState<MixUpSession[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      const [activeSession, savedHistory] = await Promise.all([getActiveSession(), getSessionHistory()]);
      if (cancelled) return;

      if (activeSession) {
        hydrate(activeSession);
      } else {
        useMixUpStore.setState({ hydrated: true });
      }

      setHistory(savedHistory);
      setReady(true);
    }

    void bootstrap();

    return () => {
      cancelled = true;
    };
  }, [hydrate]);

  const snapshot = useMemo(
    () => createSessionSnapshot({ sessionId, startedAt, discovered, mixes, points }),
    [sessionId, startedAt, discovered, mixes, points]
  );

  useEffect(() => {
    if (!ready || !hydrated) return;

    const timer = window.setTimeout(async () => {
      await saveSession(snapshot);
      const nextHistory = await getSessionHistory();
      setHistory(nextHistory);
    }, 200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [snapshot, ready, hydrated]);

  return {
    history,
    ready
  };
}
