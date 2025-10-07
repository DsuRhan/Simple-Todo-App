import React from "react";
import type { Filter } from "../types";

interface Props {
  filter: Filter;
  setFilter: (f: Filter) => void;
  dark: boolean;
}

export default function TodoFilter({ filter, setFilter, dark }: Props) {
  const items: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((it) => {
        const active = it.key === filter;
        return (
          <button
            key={it.key}
            onClick={() => setFilter(it.key)}
            aria-pressed={active}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
              ${
                dark
                  ? active
                    ? "bg-slate-700 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : active
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
