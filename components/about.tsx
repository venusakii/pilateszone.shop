export function About() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-breathe">
            <h2 className="font-serif text-5xl font-bold text-foreground text-balance">About the Brand</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              PilatesZone is a place where body and mind meet in harmony. We create accessories that help you deepen
              your practice, feel every movement, and find balance between strength and flexibility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Each product is designed with care for your comfort and aesthetics, so your practice brings not only
              benefits but also pleasure.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
            <img
              src="/bright-pilates-studio-with-natural-light-and-plant.jpg"
              alt="Pilates studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
