const benefits = [
  {
    icon: "🌱",
    title: "Eco-Friendly Materials",
    description: "Natural and safe materials for your health",
  },
  {
    icon: "💪",
    title: "Ergonomic Design",
    description: "Thoughtful shape for maximum comfort",
  },
  {
    icon: "🧘",
    title: "For All Levels",
    description: "From beginners to professional instructors",
  },
  {
    icon: "💖",
    title: "Aesthetics & Comfort",
    description: "Beautiful accessories that inspire",
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-foreground mb-16 text-balance">
          Why PilatesZone
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-500 group"
            >
              <div className="text-6xl mb-4 animate-breathe group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
