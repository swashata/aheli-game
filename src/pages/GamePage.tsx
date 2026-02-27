import { Button } from "@/components/ui/button";
import { gamesBySlug } from "@/games";
import { Link, useNavigate, useParams } from "react-router";

export default function GamePage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedGame = slug ? gamesBySlug[slug] : undefined;

  return (
    <main className="min-h-screen bg-zinc-100">
      <header className="sticky top-0 z-20 w-full border-b border-zinc-300 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-2">
          <div className="flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              className="rounded-full px-3 font-semibold"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                  return;
                }
                navigate("/");
              }}
            >
              ← Back
            </Button>
          </div>
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 transition-colors hover:bg-zinc-100"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_1px_rgba(103,232,249,0.7)]" aria-hidden />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-900">Aheli</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-3 py-3">
        {selectedGame ? (
          <selectedGame.component />
        ) : (
          <div className="rounded-md border border-zinc-300 bg-white p-6">
            <h1 className="text-lg font-semibold text-zinc-900">Game not found</h1>
            <p className="mt-1 text-zinc-600">Choose a game from home to start playing.</p>
          </div>
        )}
      </section>
    </main>
  );
}
