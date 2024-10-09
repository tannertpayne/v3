import React from 'react'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'dark' | 'twitter'
}

export const Card: React.FC<CardProps> = ({ children, variant = 'default' }) => {
  const baseClasses = 'rounded-lg shadow-md'
  const variantClasses = {
    default: 'bg-white',
    dark: 'bg-[#6C757D] text-white',
    twitter: 'bg-[#1DA1F2]'
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  )
}