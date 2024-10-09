import React from 'react'
import { cn } from "@/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  className?: string
}

const GridPattern: React.FC<GridPatternProps> = ({
  width = 30,
  height = 30,
  x = -1,
  y = -1,
  className,
  ...props
}) => {
  const patternId = React.useId()

  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none fixed inset-0 h-full w-full', className)}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M ${width} 0 L 0 0 0 ${height}`} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

export default GridPattern