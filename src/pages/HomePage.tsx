import Antigravity from "@/components/Antigravity";
import ASCIIText from "@/components/AsciiText";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

const games = [
  {
    title: "Antigravity Drift",
    description: "Magnetic rings and drifting particles.",
    to: "/games/antigravity"
  },
  {
    title: "Glyph Runner",
    description: "Dash through glowing symbols and gates.",
    to: "/games/glyph-runner"
  },
  {
    title: "Nebula Rally",
    description: "A fast, soft-focus space sprint.",
    to: "/games/nebula-rally"
  },
  {
    title: "Prism Garden",
    description: "Grow light fields and bend the spectrum.",
    to: "/games/prism-garden"
  }
];

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
        <div className="w-full max-w-5xl space-y-10">
          <h1 className="sr-only">Aheli</h1>
          <div className="relative mx-auto h-[34vh] min-h-[200px] max-h-[420px] w-full">
            <ASCIIText text="Aheli" asciiFontSize={7} textColor="#f8f4ee" enableWaves />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {games.map(game => (
              <Link key={game.to} to={game.to}>
                <Card>
                  <CardHeader>
                    <CardDescription>Game</CardDescription>
                    <CardTitle>{game.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{game.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <CardDescription>Enter</CardDescription>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
