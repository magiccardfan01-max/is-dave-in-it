"use client";

import { useState, useMemo } from "react";
import { filmography, searchFilmography, type Credit } from "@/data/filmography";

export default function Home() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const { matches } = useMemo(() => {
    if (!query.trim()) return { matches: [] as Credit[] };
    const r = searchFilmography(query);
    return { matches: r.matches };
  }, [query]);

  const showResult = hasSearched && query.trim().length >= 2;
  const isYes = matches.length > 0;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setHasSearched(true);
  }

  function handleClear() {
    setQuery("");
    setHasSearched(false);
  }

  return (
    <main className="flex-1 flex flex-col items-center px-4 py-10 sm:py-16">
      <header className="text-center mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Inspired by a cool idea on X
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-3">
          Is{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Dave
          </span>{" "}
          In It?
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl">
          Type any movie or show. Instantly know if Dave Bautista (aka Drax) is in the cast.
        </p>
      </header>

      <form onSubmit={handleSearch} className="w-full max-w-xl mb-10">
        <div className="relative flex items-center glow-pulse rounded-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (!e.target.value) setHasSearched(false);
            }}
            placeholder="e.g. Guardians of the Galaxy, Dune, Spectre..."
            className="w-full px-5 py-4 pr-28 rounded-2xl bg-[#16161d] border border-[#2a2a35] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 text-lg transition"
            autoFocus
          />
          <div className="absolute right-2 flex gap-1">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition text-sm"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition text-sm"
            >
              Check
            </button>
          </div>
        </div>
      </form>

      {showResult && (
        <div className="w-full max-w-xl mb-12 bounce-in">
          {isYes ? (
            <div className="rounded-3xl border border-green-500/30 bg-green-500/5 p-8 text-center">
              <div className="text-7xl sm:text-8xl font-black text-green-400 mb-2 tracking-tighter">
                YES
              </div>
              <p className="text-zinc-300 text-lg mb-6">
                Dave is in {matches.length > 1 ? "these" : "this"}!
              </p>
              <ul className="space-y-3 text-left">
                {matches.map((m) => (
                  <li
                    key={`${m.title}-${m.year}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#16161d]/80 border border-[#2a2a35]"
                  >
                    <span className="text-2xl mt-0.5">
                      {m.type === "voice"
                        ? "🎙️"
                        : m.type === "tv"
                          ? "📺"
                          : m.type === "special"
                            ? "✨"
                            : "🎬"}
                    </span>
                    <div>
                      <div className="font-semibold text-white">
                        {m.title}{" "}
                        <span className="text-zinc-500 font-normal">({m.year})</span>
                      </div>
                      <div className="text-sm text-violet-300">as {m.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="rounded-3xl border border-red-500/30 bg-red-500/5 p-8 text-center">
              <div className="text-7xl sm:text-8xl font-black text-red-400 mb-2 tracking-tighter">
                NO
              </div>
              <p className="text-zinc-300 text-lg">
                Nope. Dave is not in &ldquo;{query.trim()}&rdquo;.
              </p>
              <p className="text-zinc-500 text-sm mt-2">
                Try another title — he's been in a lot of bangers.
              </p>
            </div>
          )}
        </div>
      )}

      <section className="w-full max-w-5xl">
        <h2 className="text-xl font-bold text-zinc-200 mb-4 flex items-center gap-2">
          <span>🎬</span> Full Filmography
          <span className="text-sm font-normal text-zinc-500">
            ({filmography.length} credits)
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filmography.map((credit) => (
            <button
              key={`${credit.title}-${credit.year}`}
              type="button"
              onClick={() => {
                setQuery(credit.title);
                setHasSearched(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left p-4 rounded-xl bg-[#16161d] border border-[#2a2a35] hover:border-violet-500/40 hover:bg-[#1c1c26] transition group"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-white group-hover:text-violet-300 transition line-clamp-1">
                  {credit.title}
                </span>
                <span className="text-xs text-zinc-500 shrink-0">{credit.year}</span>
              </div>
              <div className="text-sm text-zinc-400 line-clamp-1">as {credit.role}</div>
            </button>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-zinc-500 text-sm">
        <p>Built with Next.js · Data compiled from public filmography sources</p>
        <p className="mt-1">
          Not affiliated with Dave Bautista or Marvel. Just a fun side project.
        </p>
      </footer>
    </main>
  );
}
