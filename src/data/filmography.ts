export type Credit = {
  title: string;
  year: number;
  role: string;
  type: "movie" | "tv" | "special" | "voice";
  aliases?: string[];
};

export const filmography: Credit[] = [
  { title: "Highlander", year: 2026, role: "The Kurgen", type: "movie" },
  { title: "Avatar: The Last Airbender", year: 2026, role: "Tagah (voice)", type: "voice", aliases: ["Avatar Aang", "The Last Airbender"] },
  { title: "The Wrecking Crew", year: 2026, role: "James", type: "movie" },
  { title: "Grendel", year: 2026, role: "Beowulf", type: "movie" },
  { title: "Alpha Gang", year: 2026, role: "Actor", type: "movie" },
  { title: "Dreadnought", year: 2026, role: "Max", type: "movie" },
  { title: "Afterburn", year: 2025, role: "Jake", type: "movie" },
  { title: "Trap House", year: 2025, role: "Ray Seale", type: "movie" },
  { title: "In the Lost Lands", year: 2025, role: "Boyce", type: "movie" },
  { title: "The Naked Gun", year: 2025, role: "Dave Bautista", type: "movie", aliases: ["Naked Gun"] },
  { title: "Road House 2", year: 2025, role: "Actor", type: "movie" },
  { title: "Dune: Part Two", year: 2024, role: "Beast Rabban / Glossu Rabban Harkonnen", type: "movie", aliases: ["Dune 2", "Dune Part Two"] },
  { title: "The Last Showgirl", year: 2024, role: "Eddie", type: "movie" },
  { title: "The Killer's Game", year: 2024, role: "Joe Flood", type: "movie" },
  { title: "My Spy: The Eternal City", year: 2024, role: "JJ", type: "movie", aliases: ["My Spy 2"] },
  { title: "Parachute", year: 2024, role: "Bryce", type: "movie" },
  { title: "Jack in Time for Christmas", year: 2024, role: "Self", type: "special" },
  { title: "Guardians of the Galaxy Vol. 3", year: 2023, role: "Drax the Destroyer", type: "movie", aliases: ["Guardians 3", "GotG 3", "Guardians of the Galaxy 3"] },
  { title: "Knock at the Cabin", year: 2023, role: "Leonard", type: "movie" },
  { title: "The Boy and the Heron", year: 2023, role: "The Parakeet King (voice)", type: "voice" },
  { title: "Glass Onion: A Knives Out Mystery", year: 2022, role: "Duke Cody", type: "movie", aliases: ["Glass Onion", "Knives Out 2"] },
  { title: "The Guardians of the Galaxy Holiday Special", year: 2022, role: "Drax", type: "special", aliases: ["Guardians Holiday Special"] },
  { title: "Thor: Love and Thunder", year: 2022, role: "Drax the Destroyer", type: "movie" },
  { title: "Dune", year: 2021, role: "Glossu 'Beast' Rabban", type: "movie", aliases: ["Dune Part One", "Dune 1"] },
  { title: "Army of the Dead", year: 2021, role: "Scott Ward", type: "movie" },
  { title: "Army of Thieves", year: 2021, role: "Scott Ward (archive)", type: "movie" },
  { title: "My Spy", year: 2020, role: "JJ", type: "movie" },
  { title: "See", year: 2020, role: "Edo Voss", type: "tv", aliases: ["See Season 2"] },
  { title: "Avengers: Endgame", year: 2019, role: "Drax the Destroyer", type: "movie", aliases: ["Endgame"] },
  { title: "Stuber", year: 2019, role: "Vic", type: "movie" },
  { title: "Escape Plan: The Extractors", year: 2019, role: "Trent DeRosa", type: "movie", aliases: ["Escape Plan 3"] },
  { title: "Master Z: Ip Man Legacy", year: 2019, role: "Owen Davidson", type: "movie" },
  { title: "Final Score", year: 2019, role: "Michael Knox", type: "movie" },
  { title: "Avengers: Infinity War", year: 2018, role: "Drax the Destroyer", type: "movie", aliases: ["Infinity War"] },
  { title: "Hotel Artemis", year: 2018, role: "Everest", type: "movie" },
  { title: "Escape Plan 2: Hades", year: 2018, role: "Trent DeRosa", type: "movie", aliases: ["Escape Plan 2"] },
  { title: "Guardians of the Galaxy Vol. 2", year: 2017, role: "Drax the Destroyer", type: "movie", aliases: ["Guardians 2", "GotG 2"] },
  { title: "Blade Runner 2049", year: 2017, role: "Sapper Morton", type: "movie" },
  { title: "Bushwick", year: 2017, role: "Stupe", type: "movie" },
  { title: "Marauders", year: 2016, role: "Stockwell", type: "movie" },
  { title: "Kickboxer: Vengeance", year: 2016, role: "Tong Po", type: "movie" },
  { title: "The Warriors Gate", year: 2016, role: "Arun the Cruel", type: "movie", aliases: ["Enter the Warriors Gate"] },
  { title: "Spectre", year: 2015, role: "Mr. Hinx", type: "movie" },
  { title: "Heist", year: 2015, role: "Jason Cox", type: "movie", aliases: ["Bus 657"] },
  { title: "L.A. Slasher", year: 2015, role: "Drug Dealer #1", type: "movie" },
  { title: "Guardians of the Galaxy", year: 2014, role: "Drax the Destroyer", type: "movie", aliases: ["GotG", "Guardians"] },
  { title: "Riddick", year: 2013, role: "Diaz", type: "movie" },
  { title: "The Man with the Iron Fists", year: 2012, role: "Brass Body", type: "movie" },
  { title: "The Scorpion King 3: Battle for Redemption", year: 2012, role: "Argomael", type: "movie" },
  { title: "House of the Rising Sun", year: 2011, role: "Ray", type: "movie" },
  { title: "Wrong Side of Town", year: 2010, role: "Big Ronnie", type: "movie" },
  { title: "My Son, My Son, What Have Ye Done", year: 2009, role: "Officer", type: "movie" },
  { title: "Relative Strangers", year: 2006, role: "Wrestler (uncredited)", type: "movie" },
];

export function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function searchFilmography(query: string): { matches: Credit[]; isExact: boolean } {
  const q = normalize(query);
  if (!q || q.length < 2) return { matches: [], isExact: false };

  const matches: Credit[] = [];
  let isExact = false;

  for (const credit of filmography) {
    const titleNorm = normalize(credit.title);
    const aliases = (credit.aliases || []).map(normalize);

    if (titleNorm === q || aliases.includes(q)) {
      matches.unshift(credit);
      isExact = true;
      continue;
    }

    if (
      titleNorm.includes(q) ||
      q.includes(titleNorm) ||
      aliases.some((a) => a.includes(q) || q.includes(a))
    ) {
      matches.push(credit);
    }
  }

  matches.sort((a, b) => b.year - a.year);
  return { matches, isExact };
}
