import ElementChip from "@/games/alchemy/components/ElementChip";

type ElementPaletteProps = {
  discovered: string[];
  onSelect: (element: string) => void;
};

export default function ElementPalette({ discovered, onSelect }: ElementPaletteProps) {
  return (
    <section className="space-y-2 rounded-lg border border-violet-200 bg-violet-50/70 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-900">Elements</p>
      <div className="flex flex-wrap gap-2">
        {discovered.map(element => (
          <ElementChip
            key={element}
            element={element}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
