import Antigravity from "@/components/Antigravity";
import ASCIIText from "@/components/AsciiText";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { games } from "@/games";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-45">
        <Antigravity
          className="h-full w-full"
          autoAnimate
          color="#69D8C8"
          count={260}
          depthFactor={0.8}
          fieldStrength={12}
          lerpSpeed={0.08}
          magnetRadius={8}
          particleSize={1.25}
          particleVariance={0.5}
          pulseSpeed={2}
          ringRadius={9}
          rotationSpeed={0.1}
          waveAmplitude={0.6}
        />
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-2">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 70%, rgba(147,51,234,0.22) 0%, rgba(147,51,234,0) 100%)"
          }}
        />
        <div className="w-full max-w-5xl space-y-10">
          <h1 className="sr-only">Aheli</h1>
          <div className="relative mx-auto h-[34vh] min-h-[200px] max-h-[420px] w-full">
            <ASCIIText text="Aheli" asciiFontSize={7} textColor="#f8f4ee" enableWaves />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map(game => (
              <Link
                key={game.slug}
                to={`/games/${game.slug}`}
                className="group relative block touch-manipulation focus-visible:outline-none"
              >
                <Card className="relative overflow-hidden border-violet-200/70 bg-violet-950 shadow-md transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_24px_36px_-20px_rgba(76,29,149,0.75)] group-active:scale-[0.97] group-active:rotate-[-0.6deg] group-active:shadow-md">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-95"
                    style={{
                      background: `linear-gradient(135deg, ${game.accentFrom} 0%, ${game.accentTo} 100%)`
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/25 to-transparent"
                  />
                  <div
                    aria-hidden
                    className="absolute -right-2 -top-2 text-6xl opacity-35 transition-transform duration-200 group-hover:rotate-12 group-active:scale-110"
                  >
                    {game.emoji}
                  </div>
                  <CardHeader className="relative">
                    <CardDescription className="font-semibold uppercase tracking-[0.16em] text-violet-100/95">Tap to play</CardDescription>
                    <CardTitle className="text-4xl leading-none text-white drop-shadow-sm">{game.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-violet-50/95">{game.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="relative">
                    <div className="inline-flex items-center rounded-full border border-violet-300/70 bg-white/95 px-3 py-1 text-sm font-semibold text-violet-900 shadow-sm transition-transform duration-200 group-hover:translate-x-1">
                      Play now <span className="ml-1">→</span>
                    </div>
                  </CardFooter>
                </Card>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-violet-300/0 transition group-focus-visible:ring-violet-300/90" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/35 opacity-0 group-active:animate-ping group-active:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
