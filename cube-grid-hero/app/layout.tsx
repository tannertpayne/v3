import './globals.css'
import type { Metadata } from 'next'
import { Darker_Grotesque, Dela_Gothic_One } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'], weight: ['800'] })
const delaGothicOne = Dela_Gothic_One({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dela-gothic-one',
})

export const metadata: Metadata = {
  title: 'Tanner Payne Portfolio',
  description: 'Portfolio website of Tanner Payne',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${darkerGrotesque.className} ${delaGothicOne.variable}`}>
        <div className="relative min-h-screen">
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}