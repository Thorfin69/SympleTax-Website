// Pill badge — matches "case story", "tax help" badges in the Facebook posts.
// Usage: <Badge>tax help</Badge>

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block font-['Inter'] font-medium text-[13px] text-[#0f172a] leading-[1.3] ${className}`}
      style={{
        border: '1.5px solid #0f172a',
        borderRadius: '50px',
        padding: '5px 13px',
        letterSpacing: '-0.1px',
      }}
    >
      {children}
    </span>
  )
}
