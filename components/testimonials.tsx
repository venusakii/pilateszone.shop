import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Anna Peterson",
    role: "Pilates Instructor",
    image: "/woman-on-pilates-mat-smiling.jpg",
    text: "The ring from PilatesZone has become my favorite accessory. The quality of materials and thoughtful design make every workout more effective.",
  },
  {
    name: "Maria Sokolova",
    role: "Practicing for 2 years",
    image: "/woman-doing-pilates-exercise.jpg",
    text: "The mat is just perfect! Soft, but with good support. And it looks so beautiful that I want to practice every day.",
  },
  {
    name: "Elena Volkova",
    role: "Pilates Beginner",
    image: "/woman-with-pilates-equipment.jpg",
    text: "Started with the beginner set from PilatesZone. Everything is thought out to the smallest detail, and most importantly - very pleasant to use!",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-foreground mb-16 text-balance">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
