import type { MixResult } from "@/games/alchemy/types";

type MixResultBannerProps = {
  result: MixResult | null;
};

export default function MixResultBanner({ result }: MixResultBannerProps) {
  if (!result) {
    return (
      <div className="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-600">
        Drop 2 or 3 elements and tap <span className="font-semibold">Mix!</span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm text-violet-950">
      {result.usedRandom ? "Wild mix!" : "Recipe found!"} You created <span className="font-bold">{result.output}</span>
      {result.isNew ? " (new)" : ""}. +{result.pointsEarned} points (total {result.totalPoints}).
      {result.bonusBursts > 0 ? " Bonus burst unlocked!" : ""}
    </div>
  );
}
