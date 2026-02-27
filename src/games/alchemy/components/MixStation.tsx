import { Button } from "@/components/ui/button";
import { EMOJI_BY_ELEMENT, normalizeElementName } from "@/games/alchemy/data";
import { DndContext, DragOverlay, MouseSensor, TouchSensor, rectIntersection, type DragEndEvent, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import ElementPalette from "@/games/alchemy/components/ElementPalette";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type LastMixSummary = {
  output: string;
  pointsEarned: number;
} | null;

type MixStationProps = {
  discovered: string[];
  slots: Array<string | null>;
  lastResult: LastMixSummary;
  onSlotSet: (index: number, value: string) => void;
  onSlotClear: (index: number) => void;
  onMix: () => void;
};

export default function MixStation({ discovered, slots, lastResult, onSlotSet, onSlotClear, onMix }: MixStationProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isMixing, setIsMixing] = useState(false);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 8 } })
  );

  const { setNodeRef: setTrayNodeRef, isOver } = useDroppable({ id: "mix-tray" });

  function placeInFirstEmptySlot(element: string) {
    const firstEmpty = slots.findIndex(slot => !slot);
    if (firstEmpty === -1) {
      window.alert("You can only mix up to 3 elements.");
      return;
    }
    onSlotSet(firstEmpty, element);
  }

  function handleDragEnd(event: DragEndEvent) {
    const element = event.active.data.current?.element as string | undefined;
    setActiveElement(null);
    if (!element || !event.over) return;
    if (String(event.over.id) !== "mix-tray") return;
    placeInFirstEmptySlot(element);
  }

  async function handleMixClick() {
    const selected = slots.filter(Boolean);
    if (selected.length < 2 || isMixing) return;

    setIsMixing(true);
    await new Promise(resolve => window.setTimeout(resolve, 680));
    onMix();
    setIsMixing(false);
  }

  const selected = slots
    .map((item, slotIndex) => ({ item, slotIndex }))
    .filter(entry => Boolean(entry.item)) as Array<{ item: string; slotIndex: number }>;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragStart={(event) => {
        const element = event.active.data.current?.element as string | undefined;
        setActiveElement(element ?? null);
      }}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveElement(null)}
    >
      <section className="space-y-3 rounded-lg border border-zinc-300 bg-white p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-900">Mix Station</p>

        <div
          ref={setTrayNodeRef}
          className={cn(
            "relative min-h-20 rounded-lg border border-dashed bg-violet-50/50 px-3 py-2 transition",
            isOver ? "border-violet-500 bg-violet-100/70" : "border-violet-300"
          )}
        >
          {selected.length === 0 && (
            <div className="flex h-full min-h-14 items-center justify-center text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Tap or drag elements here
            </div>
          )}

          {selected.length > 0 && (
            <div className={cn("relative min-h-14 items-center", isMixing ? "flex justify-center" : "flex gap-2")}>
              {selected.map(({ item, slotIndex }, index) => (
                <motion.button
                  key={`${item}-${slotIndex}`}
                  type="button"
                  onClick={() => onSlotClear(slotIndex)}
                  initial={{ y: -8, opacity: 0 }}
                  animate={
                    isMixing
                      ? {
                          x: [0, -6, 6, -4, 4, 0],
                          y: [-2, 2, -1, 1, 0],
                          rotate: [0, -3, 3, -2, 2, 0],
                          opacity: 1
                        }
                      : { x: 0, y: 0, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: isMixing ? 0.45 : 0.2 }}
                  className={cn(
                    "rounded-full border border-violet-300 bg-white px-3 py-1 text-sm font-medium text-zinc-800 shadow-sm",
                    isMixing && "absolute"
                  )}
                  style={{
                    zIndex: selected.length - index,
                    left: isMixing ? "50%" : undefined,
                    transform: isMixing ? `translateX(calc(-50% + ${index * 14 - (selected.length - 1) * 7}px))` : undefined
                  }}
                >
                  <span className="mr-1.5" aria-hidden>
                    {EMOJI_BY_ELEMENT[normalizeElementName(item)] ?? "✨"}
                  </span>
                  {item}
                </motion.button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 rounded-md border border-zinc-200 bg-zinc-50 p-2 text-sm text-zinc-700">
          <p className="truncate">
            {lastResult ? (
              <>
                Last created: <span className="font-semibold text-zinc-900">{lastResult.output}</span> · +{lastResult.pointsEarned}
              </>
            ) : (
              "Last created: none yet"
            )}
          </p>
          <Button onClick={handleMixClick} disabled={selected.length < 2 || isMixing} className="shrink-0">
            {isMixing ? "Mixing..." : "Mix!"}
          </Button>
        </div>
      </section>

      <ElementPalette discovered={discovered} onSelect={placeInFirstEmptySlot} />

      <DragOverlay>
        {activeElement ? (
          <div className="rounded-full border border-violet-300 bg-white px-3 py-1 text-sm font-medium text-zinc-800 shadow">
            {activeElement}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
