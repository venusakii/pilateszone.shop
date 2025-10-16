export function VideoSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">
            Pilates at Home with PilatesZone
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">Mini-lessons and accessory usage techniques</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
              alt="Video tutorial 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground to-transparent">
              <h3 className="font-serif text-xl font-semibold text-white">Ring Exercises for Beginners</h3>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
              alt="Video tutorial 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground to-transparent">
              <h3 className="font-serif text-xl font-semibold text-white">Breathing Technique in Pilates</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
