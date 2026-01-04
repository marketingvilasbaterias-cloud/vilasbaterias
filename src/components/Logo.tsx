export default function Logo({ className = "h-16", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const isLight = variant === "light";
  return (
    <svg
      className={className}
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="thunderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E43338" />
          <stop offset="100%" stopColor="#c72b30" />
        </linearGradient>
      </defs>

      <text
        x="10"
        y="45"
        fontSize="38"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill={isLight ? "#FFF" : "#E43338"}
        letterSpacing="1"
      >
        VILA'S
      </text>

      <g transform="translate(125, 15)">
        <path
          d="M15 0 L8 25 L18 25 L10 50 L28 20 L18 20 L25 0 Z"
          fill={isLight ? "#FFF4A3" : "url(#thunderGradient)"}
          stroke="#FFF4A3"
          strokeWidth="1.5"
        />
      </g>

      <text
        x="165"
        y="45"
        fontSize="38"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill={isLight ? "#FFF" : "#2E7D32"}
        letterSpacing="1"
      >
        BATERIAS
      </text>

      <rect
        x="8"
        y="52"
        width="264"
        height="3"
        fill={isLight ? "#FFF4A3" : "#2E7D32"}
        rx="1.5"
      />
    </svg>
  );
}
