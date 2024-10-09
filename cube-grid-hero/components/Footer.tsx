import Link from 'next/link'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#6C757D] p-8">
      <div className="container mx-auto flex justify-between items-start">
        <div>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Instagram"><Instagram className="w-6 h-6 text-black" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-6 h-6 text-black" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-6 h-6 text-black" /></a>
          </div>
          <Link href="/" className="text-2xl font-bold text-black">
            @tannertpayne
          </Link>
        </div>
        <nav>
          <ul className="space-y-2 text-right">
            <li><Link href="/" className="text-black hover:text-[#F57C00]">Home</Link></li>
            <li><Link href="/ideas" className="text-black hover:text-[#F57C00]">Ideas</Link></li>
            <li><Link href="/gallery" className="text-black hover:text-[#F57C00]">Gallery</Link></li>
            <li><Link href="/about" className="text-black hover:text-[#F57C00]">About</Link></li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-8 text-sm text-black">
        © {new Date().getFullYear()} Tanner Payne. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer