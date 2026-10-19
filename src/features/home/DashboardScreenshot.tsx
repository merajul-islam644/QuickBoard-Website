type Props = {
  className?: string;
};

export function DashboardScreenshot({ className }: Props) {
  const cards = [
    {
      title: "Design inspiration",
      tags: ["design", "ui"],
      collection: "Work",
    },
    {
      title: "TypeScript handbook",
      tags: ["docs", "code"],
      collection: "Learning",
    },
    {
      title: "CSS tricks",
      tags: ["css", "reference"],
      collection: "Tools",
    },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 900 520"
      role="img"
      aria-label="QuickBoard dashboard showing saved bookmark cards with titles, tags and a collection name."
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="520" rx="12" fill="hsl(210 40% 96%)" />

      <rect x="0" y="0" width="900" height="56" rx="12" fill="hsl(0 0% 100%)" />
      <rect x="0" y="44" width="900" height="12" fill="hsl(0 0% 100%)" />
      <circle cx="30" cy="28" r="5" fill="hsl(0 84% 60%)" />
      <circle cx="48" cy="28" r="5" fill="hsl(38 92% 50%)" />
      <circle cx="66" cy="28" r="5" fill="hsl(142 71% 45%)" />
      <rect x="100" y="18" width="150" height="20" rx="6" fill="hsl(210 40% 96%)" />
      <rect x="770" y="18" width="100" height="20" rx="6" fill="hsl(221 83% 53%)" />

      <rect
        x="0"
        y="56"
        width="220"
        height="464"
        fill="hsl(0 0% 100%)"
      />
      <rect
        x="219"
        y="56"
        width="1"
        height="464"
        fill="hsl(214 32% 91%)"
      />

      {["Collections", "Work", "Learning", "Tools", "Favorites"].map(
        (label, i) => (
          <g key={label}>
            {i === 1 && (
              <rect
                x="12"
                y={160 + (i - 1) * 44 - 12}
                width="196"
                height="40"
                rx="8"
                fill="hsl(214 95% 93%)"
              />
            )}
            {i === 0 ? (
              <text
                x="28"
                y="132"
                fontFamily="Arial, sans-serif"
                fontSize="13"
                fontWeight="700"
                fill="hsl(215 16% 47%)"
              >
                {label}
              </text>
            ) : (
              <text
                x="28"
                y={160 + (i - 1) * 44}
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fill={
                  i === 1 ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)"
                }
              >
                {label}
              </text>
            )}
          </g>
        ),
      )}

      <text
        x="256"
        y="104"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="hsl(222 47% 11%)"
      >
        My board
      </text>

      <rect
        x="256"
        y="128"
        width="360"
        height="40"
        rx="8"
        fill="hsl(0 0% 100%)"
        stroke="hsl(214 32% 91%)"
      />
      <circle
        cx="282"
        cy="148"
        r="7"
        fill="none"
        stroke="hsl(215 16% 47%)"
        strokeWidth="2"
      />
      <line
        x1="287"
        y1="153"
        x2="293"
        y2="159"
        stroke="hsl(215 16% 47%)"
        strokeWidth="2"
      />
      <text
        x="306"
        y="153"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fill="hsl(215 16% 47%)"
      >
        Search saved links
      </text>

      {cards.map((card, i) => {
        const x = 256 + i * 210;
        return (
          <g key={card.title}>
            <rect
              x={x}
              y="200"
              width="190"
              height="150"
              rx="12"
              fill="hsl(0 0% 100%)"
              stroke="hsl(214 32% 91%)"
            />
            <rect x={x + 16} y="216" width="30" height="30" rx="8" fill="hsl(214 95% 93%)" />
            <text
              x={x + 16}
              y="276"
              fontFamily="Arial, sans-serif"
              fontSize="15"
              fontWeight="700"
              fill="hsl(222 47% 11%)"
            >
              {card.title}
            </text>
            {card.tags.map((tag, t) => (
              <g key={tag}>
                <rect
                  x={x + 16 + t * 60}
                  y="292"
                  width="52"
                  height="22"
                  rx="11"
                  fill="hsl(210 40% 96%)"
                />
                <text
                  x={x + 16 + t * 60 + 26}
                  y="307"
                  textAnchor="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="11"
                  fill="hsl(215 16% 47%)"
                >
                  {tag}
                </text>
              </g>
            ))}
            <text
              x={x + 16}
              y="336"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontWeight="600"
              fill="hsl(221 83% 53%)"
            >
              {card.collection}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
