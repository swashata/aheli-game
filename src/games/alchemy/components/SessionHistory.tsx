import type { MixUpSession } from "@/games/alchemy/types";
import { format } from "date-fns";

type SessionHistoryProps = {
  history: MixUpSession[];
  currentSessionId: string;
};

export default function SessionHistory({ history, currentSessionId }: SessionHistoryProps) {
  const recent = history.slice(0, 6);

  return (
    <section className="rounded-lg border border-zinc-300 bg-white p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Saved progress</p>
      <ul className="space-y-2">
        {recent.map(session => (
          <li key={session.id} className="rounded-md border border-zinc-200 px-2 py-1.5 text-sm text-zinc-700">
            <p className="font-medium">
              {session.id === currentSessionId ? "Current session" : "Previous session"}
            </p>
            <p>Started: {format(new Date(session.startedAt), "MMM d, yyyy h:mm a")}</p>
            <p>Discovered: {session.discovered.length} | Mixes: {session.mixes} | Points: {session.points ?? 0}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
