import { Button } from "@/components/ui/button"

export function FeaturedProduct() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Soft mist effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Top Product of the Week
          </span>
          <h2 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">Pilates Magic Ring Pro</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 animate-float">
            <img
              src="/pilates-magic-ring-professional-on-neutral-backgro.jpg"
              alt="Pilates Magic Ring Pro"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              For deep muscles and precise movement control. Professional ring with ergonomic handles and optimal
              resistance.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Durable steel construction with soft coating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Ergonomic handles for comfortable grip</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Suitable for all fitness levels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>38 cm diameter, 450 g weight</span>
              </li>
            </ul>

            <Button
              size="lg"
              className="bg-primary hover:bg-[#FDDC8E] hover:text-foreground text-primary-foreground rounded-full px-8 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
