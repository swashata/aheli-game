import { Link, useParams } from "react-router";

const titleMap: Record<string, string> = {
  "antigravity": "Antigravity Drift",
  "glyph-runner": "Glyph Runner",
  "nebula-rally": "Nebula Rally",
  "prism-garden": "Prism Garden"
};

export default function GamePage() {
  const { slug } = useParams();
  const title = slug && titleMap[slug] ? titleMap[slug] : "Aheli Game";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto w-full max-w-4xl">
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white/95 sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base text-white/70">
          This page is ready for a dedicated game experience. Tell me what mechanics or layout you want here.
        </p>
      </div>
    </main>
  );
}
