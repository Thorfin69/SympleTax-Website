// Inline paint brush stroke behind a word or short phrase.
// Sits behind text via z-index. Stays subtle — opacity 0.72 by default.
// Usage: <PaintStreak color="pink">IRS</PaintStreak>

type PaintStreakColor = 'blue-gray' | 'pink' | 'purple' | 'teal'

const COLORS: Record<PaintStreakColor, string> = {
  'blue-gray': '#B8C9D8',
  pink:        '#E8597A',
  purple:      '#C9AEE8',
  teal:        '#8DD5CF',
}

interface PaintStreakProps {
  color: PaintStreakColor
  children: React.ReactNode
  opacity?: number
  className?: string
}

export function PaintStreak({ color, children, opacity = 0.72, className = '' }: PaintStreakProps) {
  const fill = COLORS[color]

  return (
    <span className={`relative inline-block ${className}`}>
      {/* SVG stroke — absolutely positioned behind text */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ transform: 'rotate(-2deg) scaleX(1.1)', transformOrigin: 'center' }}
      >
        <svg
          viewBox="0 0 200 48"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main stroke — irregular hand-painted bezier path */}
          <path
            d="M3,15 C12,7 35,5 65,8 C95,11 135,9 168,7 C187,6 199,10 200,17 C201,26 194,36 166,40 C138,44 90,46 52,43 C22,40 1,36 0,27 C-1,19 1,19 3,15 Z"
            fill={fill}
            opacity={opacity}
          />
          {/* Subtle lower drip edge */}
          <path
            d="M10,38 C40,43 85,45 125,43 C158,41 182,38 198,35"
            fill="none"
            stroke={fill}
            strokeWidth="2.5"
            opacity={opacity * 0.45}
            strokeLinecap="round"
          />
        </svg>
      </span>
      {/* Text on top */}
      <span className="relative">{children}</span>
    </span>
  )
}
