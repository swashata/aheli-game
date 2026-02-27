import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

type GameStatus = "idle" | "playing" | "finished";

type Target = {
  x: number;
  y: number;
  icon: string;
};

const GAME_TIME = 20;

const icons = ["⭐", "🚀", "🛸", "🌈", "✨", "🎈"];

function createTarget(): Target {
  return {
    x: 10 + Math.random() * 80,
    y: 15 + Math.random() * 70,
    icon: icons[Math.floor(Math.random() * icons.length)]
  };
}

export default function RocketPopGame() {
  const [status, setStatus] = useState<GameStatus>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [target, setTarget] = useState<Target>(() => createTarget());

  const started = status !== "idle";

  const actionLabel = useMemo(() => {
    if (status === "idle") return "Start";
    if (status === "finished") return "Play again";
    return "Playing";
  }, [status]);

  useEffect(() => {
    if (status !== "playing") return;

    const timer = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setStatus("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const mover = window.setInterval(() => {
      setTarget(createTarget());
    }, 750);

    return () => {
      window.clearInterval(timer);
      window.clearInterval(mover);
    };
  }, [status]);

  function startGame() {
    setScore(0);
    setTimeLeft(GAME_TIME);
    setTarget(createTarget());
    setStatus("playing");
  }

  function onHit() {
    if (status !== "playing") return;
    setScore(prev => prev + 1);
    setTarget(createTarget());
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-white p-3">
        <h2 className="text-base font-semibold text-zinc-900">Rocket Pop</h2>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Score: {score}</Badge>
          <Badge variant="secondary">Time: {timeLeft}s</Badge>
          <Button type="button" size="sm" onClick={startGame}>
            {actionLabel}
          </Button>
        </div>
      </div>

      <div className="relative h-[70vh] min-h-[360px] overflow-hidden rounded-lg border border-zinc-300 bg-gradient-to-b from-sky-100 to-indigo-100">
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="max-w-sm text-lg font-semibold text-zinc-700">Tap Start, then pop as many moving stars as you can in 20 seconds.</p>
          </div>
        )}

        {status === "finished" && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 p-6 text-center backdrop-blur-sm">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-zinc-900">Time Up!</p>
              <p className="text-zinc-700">You popped {score} stars.</p>
              <Button type="button" onClick={startGame}>Play again</Button>
            </div>
          </div>
        )}

        {status === "playing" && (
          <button
            type="button"
            aria-label="Pop target"
            onClick={onHit}
            className="absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/90 bg-white/90 text-3xl shadow transition hover:scale-110"
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
          >
            {target.icon}
          </button>
        )}
      </div>
    </section>
  );
}
