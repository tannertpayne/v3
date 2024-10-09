import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'shimmer'
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold transition-all duration-300'
  const variantClasses = {
    primary: 'bg-[#F57C00] hover:bg-[#FB8C00] text-white',
    outline: 'bg-white text-[#1DA1F2] hover:bg-gray-100 border border-[#1DA1F2]',
    shimmer: 'bg-black text-white relative overflow-hidden'
  }

  const shimmerStyles = variant === 'shimmer' ? {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
      transform: 'rotate(45deg)',
      animation: 'shimmer 3s infinite',
    },
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%) rotate(45deg)' },
      '100%': { transform: 'translateX(100%) rotate(45deg)' },
    }
  } : {}

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${props.className}`}
      style={{...shimmerStyles, ...props.style}}
    >
      {children}
    </button>
  )
}