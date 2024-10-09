"use client"

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import ThreeJsCube from '@/components/ThreeJsCube'
import GridPattern from '@/components/GridPattern'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [idea, setIdea] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/ideas?idea=${encodeURIComponent(idea)}`)
  }

  const freeItems = [
    { image: "https://picsum.photos/250/375?random=1", link: "#" },
    { image: "https://picsum.photos/250/375?random=2", link: "#" },
    { image: "https://picsum.photos/250/375?random=3", link: "#" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridPattern />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <ThreeJsCube />
            </div>
            <div className="text-center mt-[-80px]"> {/* Changed mt-[-75px] to mt-[-80px] */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-dela-gothic-one gradient-text leading-tight">
                BUILDING<br />
                THE BEST OF<br />
                YOUR APP IDEAS
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Free Stuff Section */}
      <section className="py-16 -mt-[50px]">
        <h2 className="text-4xl font-bold mb-8 text-center font-dela-gothic-one gradient-text">FREE STUFF</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {freeItems.map((item, index) => (
            <div key={index} className="w-[166px] group bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg hover:bg-[#E6F3FF] hover:bg-opacity-100 transition-all duration-300 rounded-lg p-1">
              <div className="mb-2">
                <div className="overflow-hidden">
                  <div className="h-[220px] w-full overflow-hidden rounded-[calc(0.5rem-2px)]">
                    <img src={item.image} alt="Free item" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center h-[40px]">
                <Button className="bg-black hover:bg-gray-800 text-[#E6F3FF] text-xs rounded-full transition-all duration-300 border border-[#E6F3FF] px-4 py-2 uppercase">
                  GET IT NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IDEAS Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-dela-gothic-one gradient-text">IDEAS</h2>
          <form onSubmit={handleSubmit} className="max-w-[50%]">
            <Textarea
              placeholder="Share your brilliant idea..."
              className="mb-4 bg-white bg-opacity-50 border-2 border-[#F57C00] focus:border-[#FB8C00]"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <div className="text-right">
              <Button type="submit" className="bg-[#F57C00] hover:bg-[#FB8C00] text-white px-6 py-2 rounded-full submit-button">
                SUBMIT IDEA
                <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}