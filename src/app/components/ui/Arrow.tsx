// Hand-drawn curved SVG arrow. Matches the black/gray arrows in the Facebook posts.
// Usage: <Arrow type="curved-right" color="black" size={60} />

type ArrowType = 'curved-right' | 'curved-down'
type ArrowColor = 'black' | 'gray' | 'teal'

const STROKE: Record<ArrowColor, string> = {
  black: '#000000',
  gray:  '#AAAAAA',
  teal:  '#00A4A4',
}

interface ArrowProps {
  type: ArrowType
  color?: ArrowColor
  size?: number
  className?: string
}

export function Arrow({ type, color = 'black', size = 64, className = '' }: ArrowProps) {
  const stroke = STROKE[color]

  if (type === 'curved-right') {
    return (
      <svg
        width={size}
        height={Math.round(size * 0.56)}
        viewBox="0 0 100 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Curved body — hand-drawn feel */}
        <path
          d="M5,28 C22,10 58,5 80,22 C89,29 93,38 91,46"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead — two lines */}
        <path
          d="M80,38 L91,46 L98,34"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    )
  }

  // curved-down
  return (
    <svg
      width={size}
      height={Math.round(size * 0.72)}
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12,8 C32,4 72,12 86,36 C93,50 89,60 78,66"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M66,60 L78,66 L76,52"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
