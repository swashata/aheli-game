import type { MixUpSession } from "@/games/alchemy/types";
import { get, set } from "idb-keyval";

const ACTIVE_SESSION_KEY = "aheli/alchemy/active-session";
const SESSION_HISTORY_KEY = "aheli/alchemy/session-history";

export async function getActiveSession(): Promise<MixUpSession | null> {
  return (await get<MixUpSession>(ACTIVE_SESSION_KEY)) ?? null;
}

export async function getSessionHistory(): Promise<MixUpSession[]> {
  return (await get<MixUpSession[]>(SESSION_HISTORY_KEY)) ?? [];
}

export async function saveSession(session: MixUpSession): Promise<void> {
  await set(ACTIVE_SESSION_KEY, session);
  const history = await getSessionHistory();
  const next = [session, ...history.filter(item => item.id !== session.id)].slice(0, 12);
  await set(SESSION_HISTORY_KEY, next);
}

export async function clearMixUpStorage(): Promise<void> {
  await set(ACTIVE_SESSION_KEY, null);
  await set(SESSION_HISTORY_KEY, []);
}
