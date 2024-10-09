"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Link, Youtube } from 'lucide-react'

const GallerySection = ({ title, items, cardClass }) => {
  const [startIndex, setStartIndex] = useState(0)

  const nextItems = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 3))
  }

  const prevItems = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="relative">
        <div className="flex overflow-x-hidden">
          {items.slice(startIndex, startIndex + 3).map((item, index) => (
            <Card key={index} className={`${cardClass} mx-2 transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-4">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" style={{aspectRatio: '16/9'}} />
                    {title === "Websites" && (
                      <div className="absolute top-2 right-2 bg-white rounded-full p-2">
                        <Link className="h-6 w-6 text-black" />
                      </div>
                    )}
                    {title === "YouTube Videos" && (
                      <div className="absolute top-2 right-2 bg-red-600 rounded-full p-2">
                        <Youtube className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                </a>
                {title === "Paper Pages" && (
                  <Button className="shimmer-button mt-2 w-full">Get it for FREE</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={prevItems}
          disabled={startIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={nextItems}
          disabled={startIndex >= items.length - 3}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

export default function Gallery() {
  const websites = [
    { title: "Website 1", image: "https://picsum.photos/800/450?random=1", link: "#" },
    { title: "Website 2", image: "https://picsum.photos/800/450?random=2", link: "#" },
    { title: "Website 3", image: "https://picsum.photos/800/450?random=3", link: "#" },
    { title: "Website 4", image: "https://picsum.photos/800/450?random=4", link: "#" },
  ]

  const paperPages = [
    { title: "Paper 1", image: "https://picsum.photos/300/400?random=5", link: "#" },
    { title: "Paper 2", image: "https://picsum.photos/300/400?random=6", link: "#" },
    { title: "Paper 3", image: "https://picsum.photos/300/400?random=7", link: "#" },
    { title: "Paper 4", image: "https://picsum.photos/300/400?random=8", link: "#" },
    { title: "Paper 5", image: "https://picsum.photos/300/400?random=9", link: "#" },
  ]

  const youtubeVideos = [
    { title: "Video 1", image: "https://picsum.photos/800/450?random=10", link: "#" },
    { title: "Video 2", image: "https://picsum.photos/800/450?random=11", link: "#" },
    { title: "Video 3", image: "https://picsum.photos/800/450?random=12", link: "#" },
    { title: "Video 4", image: "https://picsum.photos/800/450?random=13", link: "#" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-16 text-center">GALLERY</h1>
      
      <GallerySection title="Websites" items={websites} cardClass="w-full md:w-1/2 lg:w-1/3" />
      <GallerySection title="Paper Pages" items={paperPages} cardClass="w-full md:w-1/3 lg:w-1/4" />
      <GallerySection title="YouTube Videos" items={youtubeVideos} cardClass="w-full md:w-1/3" />
    </div>
  )
}