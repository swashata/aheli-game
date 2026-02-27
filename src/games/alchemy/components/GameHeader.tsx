type GameHeaderProps = {
  title: string;
};

export default function GameHeader({ title }: GameHeaderProps) {
  return (
    <header className="rounded-lg border border-zinc-300 bg-white p-3">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <p className="text-sm text-zinc-600">Mix 2 or 3 elements to unlock wonder.</p>
    </header>
  );
}
