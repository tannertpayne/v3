import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold mb-2">TANNER</h1>
          <h2 className="text-3xl mb-8">Business & Tech</h2>
          <div className="prose dark:prose-invert border border-gray-300 p-6 rounded-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-4xl font-semibold mb-2 text-[#F57C00]">200+</h3>
                <p className="text-sm">hours spent coding</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-4xl font-semibold mb-2 text-[#F57C00]">1</h3>
                <p className="text-sm">bachelor degree</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-4xl font-semibold mb-2 text-[#F57C00]">$0</h3>
                <p className="text-sm">earned online</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://picsum.photos/600/800" alt="Tanner Payne" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}