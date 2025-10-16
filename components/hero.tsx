import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9F8F6] via-[#E8E5E1] to-[#F9F8F6]">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute w-full h-full animate-wave" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            fill="#7BC9A5"
            fillOpacity="0.1"
            d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
          />
        </svg>
        <svg
          className="absolute w-full h-full animate-wave"
          style={{ animationDelay: "-5s" }}
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            fill="#A3A0F2"
            fillOpacity="0.1"
            d="M0,500 C360,400 540,600 840,500 C1140,400 1320,600 1440,500 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/woman-in-pilates-pose-on-mat-in-bright-studio-with.jpg"
          alt="Pilates practice"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-breathe">
        <div className="mb-8">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-4 text-balance">PilatesZone</h1>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 text-balance">
          Balance. Movement. Energy.
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Pilates accessories that inspire movement.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-[#FDDC8E] hover:text-foreground text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Shop Now
        </Button>
      </div>
    </section>
  )
}
