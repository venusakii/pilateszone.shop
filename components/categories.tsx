import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Mats & Towels",
    image: "/pilates-mat-rolled-up-on-wooden-floor.jpg",
  },
  {
    title: "Pilates Rings",
    image: "/pilates-ring-circle-on-neutral-background.jpg",
  },
  {
    title: "Massage Rollers",
    image: "/foam-roller-for-pilates-massage.jpg",
  },
  {
    title: "Straps & Blocks",
    image: "/yoga-strap-and-block-for-pilates.jpg",
  },
  {
    title: "Balls & Balancers",
    image: "/pilates-ball-on-light-background.jpg",
  },
  {
    title: "Bottles & Accessories",
    image: "/minimalist-water-bottle-for-fitness.jpg",
  },
]

export function Categories() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-foreground mb-16 text-balance">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-center text-foreground">{category.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
