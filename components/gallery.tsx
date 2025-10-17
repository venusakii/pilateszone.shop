"use client"

import { useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=800&h=600&fit=crop&auto=format&q=80",
]

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-foreground mb-16 text-balance">
          Movement Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Pilates movement ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
