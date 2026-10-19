type Props = {
  className?: string;
};

export function CollectionsScreenshot({ className }: Props) {
  const collections = [
    { label: "Work", count: 12 },
    { label: "Learning", count: 8 },
    { label: "Tools", count: 5 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 900 520"
      role="img"
      aria-label="QuickBoard collections sidebar showing Work, Learning and Tools."
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="520" rx="12" fill="hsl(210 40% 96%)" />

      <rect x="0" y="0" width="900" height="56" fill="hsl(0 0% 100%)" />
      <circle cx="30" cy="28" r="5" fill="hsl(0 84% 60%)" />
      <circle cx="48" cy="28" r="5" fill="hsl(38 92% 50%)" />
      <circle cx="66" cy="28" r="5" fill="hsl(142 71% 45%)" />
      <rect x="100" y="18" width="150" height="20" rx="6" fill="hsl(210 40% 96%)" />

      <rect x="0" y="56" width="240" height="464" fill="hsl(0 0% 100%)" />
      <line x1="239" y1="56" x2="239" y2="520" stroke="hsl(214 32% 91%)" />

      <text
        x="28"
        y="100"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="1"
        fill="hsl(215 16% 47%)"
      >
        COLLECTIONS
      </text>

      {collections.map((collection, i) => {
        const y = 128 + i * 52;
        const active = i === 0;
        return (
          <g key={collection.label}>
            {active && (
              <rect
                x="12"
                y={y - 18}
                width="216"
                height="44"
                rx="8"
                fill="hsl(214 95% 93%)"
              />
            )}
            <rect
              x="28"
              y={y - 10}
              width="18"
              height="18"
              rx="5"
              fill={active ? "hsl(221 83% 53%)" : "hsl(215 16% 47%)"}
            />
            <text
              x="60"
              y={y + 4}
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight={active ? "700" : "400"}
              fill={active ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)"}
            >
              {collection.label}
            </text>
            <text
              x="208"
              y={y + 4}
              textAnchor="end"
              fontFamily="Arial, sans-serif"
              fontSize="13"
              fill="hsl(215 16% 47%)"
            >
              {collection.count}
            </text>
          </g>
        );
      })}

      <text
        x="276"
        y="104"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="hsl(222 47% 11%)"
      >
        Work
      </text>
      <text
        x="276"
        y="130"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fill="hsl(215 16% 47%)"
      >
        12 saved links
      </text>

      {[0, 1, 2, 3].map((i) => {
        const y = 168 + i * 78;
        return (
          <g key={i}>
            <rect
              x="276"
              y={y}
              width="584"
              height="64"
              rx="10"
              fill="hsl(0 0% 100%)"
              stroke="hsl(214 32% 91%)"
            />
            <rect x="296" y={y + 16} width="32" height="32" rx="8" fill="hsl(214 95% 93%)" />
            <rect x="344" y={y + 14} width="220" height="12" rx="6" fill="hsl(222 47% 11% / 0.85)" />
            <rect x="344" y={y + 34} width="160" height="10" rx="5" fill="hsl(215 16% 47% / 0.5)" />
            <rect x="760" y={y + 18} width="80" height="24" rx="12" fill="hsl(210 40% 96%)" />
          </g>
        );
      })}
    </svg>
  );
}
