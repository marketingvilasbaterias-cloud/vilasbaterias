export default function Logo({ className = "h-16", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const isLight = variant === "light";
  return (
    <svg
      className={className}
      viewBox="0 0 320 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="thunderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4D6D" />
          <stop offset="100%" stopColor="#C9184A" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.4"/>
        </filter>
      </defs>

      <text
        x="5"
        y="45"
        fontSize="42"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        fill="#333"
        letterSpacing="-1"
      >
        VILA'S
      </text>
      <text
        x="5"
        y="45"
        fontSize="42"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        fill={isLight ? "#FFF" : "#FF4D6D"}
        letterSpacing="-1"
        filter="url(#shadow)"
      >
        VILA'S
      </text>

      <g transform="translate(125, 10)">
        <path
          d="M20 0 L10 28 L22 28 L12 56 L35 26 L23 26 L33 0 Z"
          fill="#333"
        />
        <path
          d="M18 0 L8 28 L20 28 L10 56 L33 26 L21 26 L31 0 Z"
          fill="url(#thunderGradient)"
          stroke="#FFD60A"
          strokeWidth="2"
          filter="url(#shadow)"
        />
      </g>

      <text
        x="175"
        y="45"
        fontSize="42"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        fill="#333"
        letterSpacing="-1"
      >
        BATERIAS
      </text>
      <text
        x="175"
        y="45"
        fontSize="42"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        fill={isLight ? "#FFF" : "#FFD60A"}
        letterSpacing="-1"
        filter="url(#shadow)"
      >
        BATERIAS
      </text>
    </svg>
  );
}
