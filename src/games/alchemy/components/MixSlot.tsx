import { Button } from "@/components/ui/button";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

type MixSlotProps = {
  index: number;
  value: string | null;
  onClear: (index: number) => void;
};

export default function MixSlot({ index, value, onClear }: MixSlotProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: `slot-${index}`,
    data: { slotIndex: index }
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "relative flex min-h-20 items-center justify-center rounded-lg border-2 border-dashed bg-white px-2 py-4",
        isOver ? "border-violet-500 bg-violet-50" : "border-violet-200"
      )}
    >
      {value ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-violet-900">{value}</span>
          <Button size="sm" variant="ghost" onClick={() => onClear(index)}>
            Clear
          </Button>
        </div>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Drop Element {index + 1}</span>
      )}
    </div>
  );
}
