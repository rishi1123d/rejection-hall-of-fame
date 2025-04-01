"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy, Sparkles, ArrowRight } from "lucide-react"

// Sample rejection stories data
const rejectionStories = [
  {
    id: 1,
    title: "Rejected by 12 Publishers",
    person: "J.K. Rowling",
    category: "Arts",
    rejection: "Harry Potter was rejected by 12 different publishers before Bloomsbury finally took a chance.",
    success: "Became one of the best-selling book series in history with over 500 million copies sold worldwide.",
    likes: 2453,
    personImage: "/images/people/jk-rowling.png",
  },
  {
    id: 2,
    title: "Too Ordinary to Succeed",
    person: "Walt Disney",
    category: "Business",
    rejection: "Fired from a newspaper for 'lacking imagination' and 'having no original ideas'.",
    success: "Founded Disney, now one of the world's largest entertainment companies valued at over $200 billion.",
    likes: 1872,
    personImage: "/images/people/walt-disney.png",
  },
  {
    id: 3,
    title: "Rejected by Harvard",
    person: "Warren Buffett",
    category: "Business",
    rejection: "Rejected from Harvard Business School, which he considered his top choice for graduate education.",
    success: "Became one of the most successful investors of all time with a net worth over $100 billion.",
    likes: 1543,
    personImage: "/images/people/warren-buffett.png",
  }
]

export default function Home() {
  const [stories] = useState(rejectionStories)
  
  // Basic scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Trophy className="h-6 w-6 logo-icon" />
            <span className="logo-text">Rejection Hall of Fame</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#" onClick={() => scrollToSection("home")} className="text-foreground hover:text-secondary transition-colors nav-link font-medium">
              Home
            </Link>
            <Link href="#stories" onClick={() => scrollToSection("stories")} className="text-foreground hover:text-secondary transition-colors nav-link font-medium">
              Stories
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 hero-pattern">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="px-3 py-1 text-sm inline-flex items-center gap-1 bg-primary text-primary-foreground rounded-full">
                  <Sparkles className="h-3.5 w-3.5" />
                  Inspiring Stories
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-secondary">Rejection</span> Hall of Fame
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Celebrating the rejections that preceded greatness. A collection of stories from people who faced
                  rejection but went on to accomplish awesome things.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("stories")}
                    className="inline-flex gap-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Explore Stories <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl relative h-[400px]">
                <Image
                  src="/images/rejection-banner.png"
                  alt="Rejection Hall of Fame"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section id="stories" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Famous <span className="text-secondary">Rejection</span> Stories
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                These inspiring individuals faced rejection but persevered to achieve extraordinary success.
              </p>
            </div>
            
            <div className="story-grid">
              {stories.map((story) => (
                <Card key={story.id} className="h-full flex flex-col card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{story.title}</CardTitle>
                        <CardDescription className="font-semibold mt-1">{story.person}</CardDescription>
                      </div>
                      <div className="relative h-12 w-12 rounded-full overflow-hidden person-image">
                        <Image
                          src={story.personImage || "/images/placeholder.svg"}
                          alt={story.person}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-primary">The Rejection</h4>
                        <p>{story.rejection}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-secondary">The Success</h4>
                        <p>{story.success}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-muted-foreground">{story.likes} likes</span>
                        <span className="text-sm font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">{story.category}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Trophy className="h-5 w-5 logo-icon" />
              <span className="logo-text">Rejection Hall of Fame</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rejection Hall of Fame. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

