import { EMOJI_BY_ELEMENT, getElementPoints, isPrimitiveElement, normalizeElementName, getPrimitiveBackgroundColor } from "@/games/alchemy/data";
import { cn } from "@/lib/utils";

type ElementChipProps = {
  element: string;
  onSelect: (element: string) => void;
};

export default function ElementChip({ element, onSelect }: ElementChipProps) {
  const emoji = EMOJI_BY_ELEMENT[normalizeElementName(element)] ?? "✨";
  const isPrimitive = isPrimitiveElement(element);
  const points = getElementPoints(element);

  return (
    <button
      type="button"
      onClick={() => onSelect(element)}
      className={cn(
        "inline-flex touch-none select-none items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm",
        isPrimitive ? `border-accent-foreground ${getPrimitiveBackgroundColor(element)}` : "border-violet-200 bg-white",
        "hover:-translate-y-0.5 hover:border-violet-300 hover:shadow",
        "active:scale-95"
      )}
    >
      <span aria-hidden>{emoji}</span>
      <span>{element}</span>
      {!isPrimitive && <span className="rounded-full bg-violet-100 px-1.5 py-0.5 text-[10px] font-bold text-violet-800">+{points}</span>}
    </button>
  );
}
