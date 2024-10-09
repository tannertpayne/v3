"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react'

export default function Ideas() {
  const [idea, setIdea] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const ideaFromParams = searchParams.get('idea')
    if (ideaFromParams) {
      setIdea(decodeURIComponent(ideaFromParams))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ idea, name, email })
    setIdea('')
    setName('')
    setEmail('')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">IDEAS</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-[12.5%] lg:px-0">
            <Textarea 
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Your idea..."
              className="mb-4"
            />
            <Input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mb-4"
            />
            <Input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="mb-4"
            />
            <div className="text-right">
              <Button type="submit" className="bg-[#F57C00] hover:bg-[#FB8C00] submit-button w-[calc(12rem+30px)]">
                SUBMIT MY IDEA
                <ArrowRight className="ml-2 arrow-icon" />
              </Button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 max-w-[66.666667%] mx-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="mb-4 bg-[#6C757D]">
              <CardHeader>
                <CardTitle>User {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white">This is idea number {i}. It's an example of what user-submitted ideas might look like.</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" className="flex-1 like-button bg-[#6C757D] text-white border-white hover:bg-[#5a6268] hover:text-white">
                    <ThumbsUp className="mr-2 h-4 w-4 thumbs-up-icon" />
                    Like
                  </Button>
                  <Button variant="outline" className="flex-1 dislike-button bg-[#6C757D] text-white border-white hover:bg-[#5a6268] hover:text-white">
                    <ThumbsDown className="mr-2 h-4 w-4 thumbs-down-icon" />
                    Dislike
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}