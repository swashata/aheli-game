import { Badge } from "@/components/ui/badge";

type StatsCardProps = {
  discoveredCount: number;
  totalCount: number;
  mixes: number;
  points: number;
};

export default function StatsCard({ discoveredCount, totalCount, mixes, points }: StatsCardProps) {
  return (
    <section className="rounded-lg border border-zinc-300 bg-white p-3">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Discovered: {discoveredCount}/{totalCount}</Badge>
        <Badge variant="secondary">Mixes: {mixes}</Badge>
        <Badge variant="secondary">Points: {points}</Badge>
      </div>
    </section>
  );
}
