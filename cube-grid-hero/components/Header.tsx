"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/ideas', label: 'Ideas' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <Link href="/" className="text-2xl font-bold text-black">
        @tanner<span className="text-[#F57C00]">t</span>payne
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-black hover:text-[#F57C00]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#F57C00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F57C00] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </Menu.Button>

          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {menuItems.map((item) => (
                <Menu.Item key={item.href}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={`${
                        active ? 'bg-gray-100 text-[#F57C00]' : 'text-black'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {item.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  )
}

export default Header