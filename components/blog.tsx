import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "5 Simple Exercises with a Pilates Ring",
    excerpt: "Learn how to effectively use the ring to strengthen deep muscles",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    date: "March 15, 2024",
  },
  {
    title: "How to Choose a Mat by Softness Level",
    excerpt: "Complete guide to choosing the perfect mat for your practice",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=400&fit=crop",
    date: "March 10, 2024",
  },
  {
    title: "Why Pilates is the Best Anti-Stress",
    excerpt: "Scientific research on the impact of Pilates on mental health",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    date: "March 5, 2024",
  },
]

export function Blog() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-foreground mb-16 text-balance">Blog & Tips</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h3 className="font-serif text-xl font-semibold text-foreground text-balance">{post.title}</h3>
                  <p className="text-muted-foreground text-pretty">{post.excerpt}</p>
                  <Button variant="ghost" className="text-primary hover:text-[#FDDC8E] p-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
